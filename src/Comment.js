import React from 'react'

const Comment = (props) => <div className='card'><p className='card-body'>{props.comment.comment} </p></div>

export default Comment

//const Comment = (props) => <div className='card'><p className='card-body'>{props.comment.comment} por: {props.comment.user.name}</p></div>

