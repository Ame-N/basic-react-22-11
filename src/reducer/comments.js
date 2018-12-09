import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'

const defaultComments = normalizedComments.reduce(
  (acc, comment) => ({
    ...acc,
    [comment.id]: comment
  }),
  {}
)

export default (commentsState = defaultComments, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_COMMENT:
      const nextComments = { ...commentsState }
      nextComments[payload.comment.id] = { ...payload.comment }
      console.log('ADDED: ', payload)
      return nextComments

    default:
      return commentsState
  }
}
