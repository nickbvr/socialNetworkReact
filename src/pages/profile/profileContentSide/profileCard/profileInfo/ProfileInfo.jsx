import React from 'react'
import {ProfileInfoStyles} from './ProfileInfo.styles'

export function ProfileInfo(props) {
    return (
        <ProfileInfoStyles>
            <h1>Nick K.</h1>
            <p>Date of Birth: 15th May</p>
            <p>City: Vinnytsia</p>
            <p>Education: VNTU</p>
            <p>Mail: example@gmail.com</p>
        </ProfileInfoStyles>
    )
}