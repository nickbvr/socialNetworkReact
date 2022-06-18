import React from 'react'
import {CreatePostStyles} from './CreatePost.styles'

export function CreatePost(props) {
    return (
        <CreatePostStyles>
            <textarea onChange={props.handleChange} value={props.text} placeholder={'Your news'}></textarea>
            <button onClick={props.handleClick}>Add post</button>
        </CreatePostStyles>
    )
}