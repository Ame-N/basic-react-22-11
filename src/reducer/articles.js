import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'

const defaultArticles = normalizedArticles.reduce(
  (acc, article) => ({
    ...acc,
    [article.id]: article
  }),
  {}
)

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      let filtrated = Object.assign({}, articlesState)
      delete filtrated[payload.id]
      return filtrated

    case ADD_COMMENT:
      let nextArticles = Object.assign({}, articlesState)
      nextArticles[payload.articleId].comments.push(payload.comment.id)
      return nextArticles

    default:
      return articlesState
  }
}
