import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from '../App';
import Todos from '../components/Todos';
import NotFound from '../components/NotFound';

const Router = () => (
    <BrowserRouter>  
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/todos" component={Todos} />
            {/*for 404*/}
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;