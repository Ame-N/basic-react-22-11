import React from 'react'
import expand from '../decorators/expand'

function CommentList(props) {
  const { comments, isOpen } = props

  return <ul>{wrapComments(isOpen, comments)}</ul>
}

function wrapComments(isOpen, data) {
  if (!isOpen) return null

  return data.map((comment) => {
    return (
      <li key={comment.id}>
        <b>{comment.user}</b>
        <p>{comment.text}</p>
      </li>
    )
  })
}

export default expand(CommentList)
