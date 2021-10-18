import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PaginaLogin from './PaginaLogin';
import Layout from './PaginaPrincipal/components/Layout'

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Layout />
            </Route>
            
            <Route exact path="/login">
                <PaginaLogin />
            </Route>
        </Switch>
);
}

export default Routes;
