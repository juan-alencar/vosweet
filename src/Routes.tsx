import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PaginaLogin from './PaginaLogin';
import Layout from './PaginaPrincipal/components/Layout'

export default () => {
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
