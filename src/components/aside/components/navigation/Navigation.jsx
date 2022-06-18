import React from 'react';
import {NavigationLink} from './navigationLink/NavigationLink';
import {NavigationLinksData} from '../../../../constants/NavigationLink.constants';
import {NavigationWrapper} from './Navigation.styles';

export function Navigation(props) {
    let linksElements = NavigationLinksData.map((element, i) =>
        <NavigationLink key={i} path={element.path} name={element.name}/>)
    return (
        <NavigationWrapper>
            {linksElements}
        </NavigationWrapper>
    )
}