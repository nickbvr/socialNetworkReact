import React from 'react';
import { DialogMessageItemStyles } from './DialogMessageItem.styles';

export function DialogMessageItem(props) {
    return (
        <DialogMessageItemStyles>
            <pre>{props.message}</pre>
        </DialogMessageItemStyles>
    )
}