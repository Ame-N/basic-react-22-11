import React from 'react'
import { connect } from 'react-redux'
import { addComment } from '../ac'

class CommentForm extends React.Component {
  state = {
    text: '',
    user: ''
  }

  render() {
    return (
      <form method="post" action="#" style={{ marginTop: '20px' }}>
        <input
          style={{ display: 'block', marginTop: '10px' }}
          type="text"
          value={this.state.user}
          onChange={this.onNameChange}
          placeholder="Your name..."
        />
        <textarea
          style={{ display: 'block', marginTop: '10px' }}
          value={this.state.text}
          placeholder="Your comment..."
          onChange={this.onTextChange}
        />
        <input
          style={{ display: 'block', marginTop: '10px' }}
          onClick={this.onAdd(this.props.articleId)}
          type="submit"
          value="Add comment"
        />
      </form>
    )
  }

  onAdd = (articleId) => (event) => {
    event.preventDefault()

    this.props.addComment({
      articleId: articleId,
      comment: {
        text: this.state.text,
        user: this.state.user
      }
    })

    this.setState({
      text: '',
      user: ''
    })
  }

  onTextChange = (event) => {
    this.setState({
      ...this.state,
      text: event.currentTarget.value
    })
  }

  onNameChange = (event) => {
    this.setState({
      ...this.state,
      user: event.currentTarget.value
    })
  }
}

export default connect(
  null,
  { addComment }
)(CommentForm)
