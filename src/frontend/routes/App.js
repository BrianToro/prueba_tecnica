import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import List from "../containers/List";
import Notfound from "../containers/notFound";
import Details from "../containers/Details";
import '../assets/styles/App.scss';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={List} />
            <Route exact path="/grant/:id" component={Details} />
            <Route component={Notfound} />
        </Switch>
    </BrowserRouter>
);

export default App;
