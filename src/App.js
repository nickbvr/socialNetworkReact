import React from 'react';
import {Header} from './components/header/Header.component';
import {Aside} from './components/aside/Aside.component';
import {Main} from './components/main/Main.component';
import {AppStyles} from './App.styles';

export function App(props) {
    return (
        <AppStyles>
            <Header/>
            <Aside/>
            <Main {...props}/>
        </AppStyles>
    );
}