import React from 'react'
import {ProfilePhoto} from './profilePhoto/ProfilePhoto'
import {ProfileInfo} from './profileInfo/ProfileInfo'
import {ProfileCardStyles} from './ProfileCard.styles'

export function ProfileCard(props) {
    return (
        <ProfileCardStyles>
            <ProfilePhoto/>
            <ProfileInfo/>
        </ProfileCardStyles>
    )
}