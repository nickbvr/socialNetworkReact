import React from 'react'
import { CreateMessageStyles } from './CreateMessage.styles'

export function CreateMessage(props) {
    return (
        <CreateMessageStyles>
            <textarea onChange={props.handleChange} value={props.text}></textarea>
            <button onClick={props.handleClick}>Send</button>
        </CreateMessageStyles>
    )
}