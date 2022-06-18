import React from 'react'
import avatarka from '../../img/avatarka.jpg'
import {ProfilePhotoStyles} from './ProfilePhoto.styles'

export function ProfilePhoto(props) {
    return (
        <ProfilePhotoStyles>
            <img src={avatarka} alt='profilePhoto'></img>
        </ProfilePhotoStyles>
    )
}