import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// Importing pages
import Auth from './components/Auth/Auth';
import Homepage from './components/HomePage';
import MyRequest from './components/MyRequest';
import MyBooks from './components/MyBooks';
import MyInformation from './components/MyInformation';

const App = () => (
    <BrowserRouter>
        <Switch>
        <Route path = "/" exact component = {Auth} />
        <Route path = "/homepage" exact component = {Homepage} />
        <Route path = "/myrequests" exact component = {MyRequest} />
        <Route path = "/mybooks" exact component = {MyBooks} />
        <Route path = "/myinformation" exact component = {MyInformation} />
        </Switch>
    </BrowserRouter>
);

export default App;