import React from 'react'
import logo from '../../../../assets/appImg/logo.svg'
import {LogoStyles} from './Logo.styles';

export function Logo(props) {
    return (
        <LogoStyles>
            <img src={logo} alt='AppLogo'/>
        </LogoStyles>
    )
}