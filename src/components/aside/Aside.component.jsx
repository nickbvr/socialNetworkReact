import React from 'react'
import {Navigation} from './components/navigation/Navigation'
import {AsideStyles} from './Aside.styles'

export function Aside(props) {
    return (
        <AsideStyles>
            <Navigation/>
        </AsideStyles>
    )
}