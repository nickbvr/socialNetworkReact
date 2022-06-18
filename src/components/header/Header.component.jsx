import React from 'react'
import {Logo} from './components/logo/Logo';
import {HeaderStyles} from './Header.styles';

export function Header(props) {
    return (
        <HeaderStyles>
            <Logo/>
        </HeaderStyles>
    )
}