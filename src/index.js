import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {App} from './App';
import {store} from './redux/reduxStore'
import {GlobalStyles} from './Global.styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <GlobalStyles/>
        <App localState={store.getState()} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>
);