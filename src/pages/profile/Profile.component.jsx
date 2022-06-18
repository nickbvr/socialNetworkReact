import React from 'react'
import {ProfileContentSide} from './profileContentSide/ProfileContentSide'
import {ProfilePostSide} from './profilePostSide/ProfilePostSide'
import {ProfileStyles} from './Profile.styles'

export function Profile(props) {
    return (
        <ProfileStyles>
            <ProfileContentSide/>
            <ProfilePostSide postsData={props.profilePage.posts} dispatch={props.dispatch}/>
        </ProfileStyles>
    )
}