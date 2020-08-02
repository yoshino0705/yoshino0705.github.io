import React from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import home from '../pages/home'
import test from '../pages/test'

import GA from '../utils/GoogleAnalytics'

const Content = () => {
    return (
        <Router basename="/">
            {GA.init() && <GA.RouteTracker />}
            <Switch>
                <Route exact path="/" component={home} />
                <Route path="/home" component={home} />
            </Switch>
        </Router>
    )
}

export default Content;