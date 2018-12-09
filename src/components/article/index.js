import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentList from '../comment-list'
import CommentForm from '../comment-form'
import { connect } from 'react-redux'
import { deleteArticle } from '../../ac'
import { createArticleSelector } from '../../selectors'

class Article extends Component {
  render() {
    const { article, isOpen, toggleOpen } = this.props
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen} className="test__article--btn">
          {isOpen ? 'close' : 'open'}
        </button>
        <button onClick={this.handleDeleteClick}>delete me</button>
        {this.getBody()}
      </div>
    )
  }

  handleDeleteClick = () => {
    const { deleteArticle, article } = this.props
    deleteArticle(article.id)
  }

  getBody() {
    const { isOpen, article } = this.props
    if (!isOpen) return null

    return (
      <section className="test__article--body">
        {article.text}
        <CommentList comments={article.comments} />
        <CommentForm articleId={article.id} />
      </section>
    )
  }
}

Article.propTypes = {
  id: PropTypes.string.isRequired,
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string
  }).isRequired,
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func
}

const createMapStateToProps = () => {
  const articleSelector = createArticleSelector()

  return (state, props) => ({
    comment: articleSelector(state, props)
  })
}

export default connect(
  createMapStateToProps,
  { deleteArticle }
)(Article)
