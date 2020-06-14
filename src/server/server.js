import express from "express";
import webpack from "webpack";
import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { renderRoutes } from "react-router-config";
import { StaticRouter } from "react-router-dom";
import helmet from "helmet";
import axios from "axios";
import serverRoutes from "../frontend/routes/serverRoutes";
import reducer from "../frontend/reducers";
import getManifest from "./getManifest";
import { config } from "./config";
import { dataAPI } from "./routes/index";

const app = express();
app.use(express.json());
const { env, port, url } = config;

if (env === "development") {
    console.log("Development mode");
    const webpackConfig = require("../../webpack.config");
    const webpackDevMiddleware = require("webpack-dev-middleware");
    const webpackHotMiddleware = require("webpack-hot-middleware");
    const compiler = webpack(webpackConfig);
    const serverConfig = { port: port, hot: true };

    app.use(webpackDevMiddleware(compiler, serverConfig));
    app.use(webpackHotMiddleware(compiler));
} else {
    app.use((req, res, next) => {
        if (!req.hashManifest) req.hashManifest = getManifest();
        next();
    });
    app.use(express.static(`${__dirname}/public`));
    app.use(helmet());
    app.use(helmet.permittedCrossDomainPolicies());
    app.disable("x-powered-by");
}

const setResponse = (html, preloadedState, manifest) => {
    const mainStyles = manifest ? manifest["main.css"] : "assets/app.css";
    const mainBuild = manifest ? manifest["main.js"] : "assets/app.js";

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href=${mainStyles} type="text/css">
            <title>Prueba Tecnica</title>
        </head>
        <body>
            <div id="app">${html}</div>
            <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(
                    preloadedState
                ).replace(/</g, "\\u003c")}
            </script>
            <script src=${mainBuild} type="text/javascript"></script>
        </body>
        </html>`;
};

const rederApp = async (req, res) => {
    let initialState;
    try {
        let firstPage = await axios({
            url: `${url}/api/data/page/1`,
            method: "get",
        });
        initialState = {
            ...firstPage.data,
            currentPage: 1
        }
    } catch (error) {
        console.error(error);
    }

    const store = createStore(reducer, initialState);
    const preloadedState = store.getState();
    const html = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={{}}>
                {renderRoutes(serverRoutes)}
            </StaticRouter>
        </Provider>
    );
    res.send(setResponse(html, preloadedState, req.hashManifest));
};

dataAPI(app);

app.get("*", rederApp);

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Listen on port: " + port);
    }
});
