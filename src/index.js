/**
 * Author: Kailash kumar
 */
import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import routes from './routes';

import './assets/css/bootstrap.min.css';
import './assets/css/custom.min.css';
import './assets/css/style.css';

import LoginPage from './components/user/LoginPage';
import HomePage from './components/dashboard/HomePage';

class Application extends Component {
    render() {
        return (
            <section>
                <Route component={LoginPage} />
                <Switch>
                    <Route path="/" component={App} />
                    <Route path="dashboard" component={HomePage} />
                </Switch>
            </section>
        )
    }
}
//Configure store
const store = configureStore();

render(
    <Provider store={store}>
        <BrowserRouter>
            <Application />
        </BrowserRouter>
    </Provider>,
    document.getElementById('ecommerce')
);