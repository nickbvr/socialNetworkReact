import React from 'react'
import background from '../img/background.jpg'
import {ProfileBackgroundStyles} from './ProfileBackground.styles'

export function ProfileBackground(props) {
    return (
        <ProfileBackgroundStyles>
            <img src={background} alt='ProfileBackground'></img>
        </ProfileBackgroundStyles>
    )
}