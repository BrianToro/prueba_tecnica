import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import List from "../containers/List";
import Notfound from "../containers/notFound";
import Details from "../containers/Details";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={List} />
            <Route exact path="/grant" component={Details} />
            <Route component={Notfound} />
        </Switch>
    </BrowserRouter>
);

export default App;
