import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import List from '../containers/List';
import Notfound from '../containers/notFound';
import Layout from '../components/Layout';
import Details from '../containers/Details';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={List}/>
        <Route exact path="/grant/:id" component={Details}/>
        <Route component={Notfound}/>
      </Switch>
    </Layout>
    
    
  </BrowserRouter>  
);

export default App;