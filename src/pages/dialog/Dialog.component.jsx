import React from 'react';
import {DialogContent} from './dialogContent/DialogContent';
import {DialogStyles} from './Dialog.styles';

export function Dialog(props) {
    return (
        <DialogStyles>
            <h1>Dialogs</h1>
            <DialogContent dialogData={props.dialogPage} dispatch={props.dispatch}/>
        </DialogStyles>
    )
}