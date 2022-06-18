import React, {useEffect, useRef, useState} from 'react'
import {DialogMessageItem} from './dialogMessageItem/DialogMessageItem'
import {CreateMessage} from './createMessage/CreateMessage'
import {sendMessageCreator} from "../../../../redux/reducers/dialogReducer";
import {DialogMessageSideStyles} from './DialogMessageSide.styles'

export function DialogMessageSide(props) {
    const [text, setText] = useState('')
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const [messages, setMessages] = useState(...props.dialogMessagesData)
    const handleClick = () => {
        if (text.length > 0) {
            props.dispatch(sendMessageCreator(text))
            setMessages({...messages})
        }
    }

    const messagesEnd = useRef()
    const scrollToBottom = () => {
        messagesEnd.current.scrollIntoView()
    }
    useEffect(() => {
        scrollToBottom()
    })
    return (
        <DialogMessageSideStyles>
            <div>
                {props.dialogMessagesData.map((element, i) =>
                    <DialogMessageItem key={i} message={element.message}/>)}
                <div ref={messagesEnd}/>
            </div>
            <CreateMessage handleChange={handleChange} handleClick={handleClick}/>
        </DialogMessageSideStyles>
    )
}