import React from 'react'
import expand from '../decorators/expand'

function CommentList(props) {
  const { comments, isOpen, expand } = props

  return (
    <div style={{ marginTop: '10px' }}>
      <b>Comments</b> <button onClick={expand}>{isOpen ? 'hide' : 'show'}</button>
      {getComments(isOpen, comments)}
    </div>
  )
}

function getComments(isOpen, data) {
  if (!isOpen) return null

  let commentItems = data.map((comment) => {
    return (
      <li key={comment.id}>
        <b>{comment.user}</b>
        <p>{comment.text}</p>
      </li>
    )
  })

  return <ul>{commentItems}</ul>
}

export default expand(CommentList)
