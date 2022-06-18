import React from 'react'
import {DialogNameSide} from './dialogNameSide/DialogNameSide'
import {DialogMessageSide} from './dialogMessageSide/DialogMessageSide'
import {DialogContentStyles} from './DialogContent.styles'

export function DialogContent(props) {
    return (
        <DialogContentStyles>
            <DialogNameSide dialogNamesData={props.dialogData.dialogNames} dispatch={props.dispatch}/>
            <DialogMessageSide dialogMessagesData={props.dialogData.dialogMessages} dispatch={props.dispatch}/>
        </DialogContentStyles>
    )
}