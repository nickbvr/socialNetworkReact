import React from 'react'
import {Routes, Route} from 'react-router-dom';
import {Profile} from '../../pages/profile/Profile.component';
import {Dialog} from '../../pages/dialog/Dialog.component';
import {MainStyles} from './Main.styles'

export function Main(props) {
    return (
        <MainStyles>
            <Routes>
                <Route path='/profile' element={
                    <Profile profilePage={props.localState.profilePage} dispatch={props.dispatch}/>
                }/>
                <Route path='/dialogs/*' element={
                    <Dialog dialogPage={props.localState.dialogPage} dispatch={props.dispatch}/>
                }/>
            </Routes>
        </MainStyles>
    )
}