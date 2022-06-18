import React from 'react';
import {NavLink} from 'react-router-dom'
import {NavigationLinkStyles} from './NavigationLink.styles';

export function NavigationLink(props) {
    return (
        <NavigationLinkStyles>
            <NavLink to={props.path}>{props.name}</NavLink>
        </NavigationLinkStyles>
    )
}