import React from 'react';
import {ProfileBackground} from './profileBackground/ProfileBackground';
import {ProfileCard} from './profileCard/ProfileCard';
import {ProfileContentSideStyles} from './ProfileContentSide.styles';

export function ProfileContentSide(props) {
    return (
        <ProfileContentSideStyles>
            <ProfileBackground/>
            <ProfileCard/>
        </ProfileContentSideStyles>
    )
}