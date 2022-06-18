import React from 'react'
import {DialogNameItem} from './dialogNameItem/DialogNameItem'
import {DialogNameSideStyles} from './DialogNameSide.styles'

export function DialogNameSide(props) {
    return (
        <DialogNameSideStyles>
            {props.dialogNamesData.map((element, i) =>
                <DialogNameItem key={i} id={element.id} name={element.name} img={element.img}/>)
            }
        </DialogNameSideStyles>
    )
}
