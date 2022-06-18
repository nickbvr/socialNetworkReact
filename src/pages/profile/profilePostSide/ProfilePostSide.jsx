import React, {useState} from 'react'
import {CreatePost} from './createPost/CreatePost'
import {ProfilePostItem} from './profilePostItem/ProfilePostItem'
import {ProfilePostSideStyles, ProfilePostItemWrapper} from './ProfilePostSide.styles'
import {addPostCreator} from "../../../redux/reducers/profileReducer";

export function ProfilePostSide(props) {
    const [text, setText] = useState('')
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const [posts, setPosts] = useState(...props.postsData)
    const handleClick = () => {
        if (text.length > 0) {
            props.dispatch(addPostCreator(text))
            setPosts({...posts})
        }
    }

    return (
        <ProfilePostSideStyles>
            <h1>My posts</h1>
            <CreatePost handleClick={handleClick} handleChange={handleChange}/>
            <ProfilePostItemWrapper>
                {props.postsData.map((element, i) =>
                    <ProfilePostItem key={i} message={element.message} like={element.like}/>)
                }
            </ProfilePostItemWrapper>
        </ProfilePostSideStyles>
    )
}