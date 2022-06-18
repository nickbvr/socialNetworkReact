import React from 'react'
import ava from '../../profileContentSide/img/avatarka.jpg'
import like from '../../../../assets/appImg/like.svg'
import comment from '../../../../assets/appImg/comment.svg'
import classes from './Post.module.css'

export function ProfilePostItem(props) {
    return (
        <div className={classes.wrapper}>
            <div className={classes.post}>
                <img src={ava} className={classes.ava} alt='profilePage'></img>
                <pre className={classes.text}>{props.message}</pre>
            </div>
            <div className={classes.buttons}>
                <div className={classes.like}>
                    <img src={like} alt='like'/>
                    <p>Like</p>
                    <p>{props.like}</p>
                </div>
                <div className={classes.comment}>
                    <img src={comment} alt='comment'/>
                    <p>Comment</p>
                </div>
            </div>
        </div>
    )
}