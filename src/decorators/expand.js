import React from 'react'

export default (OriginalComponent) =>
  class ExpandComponent extends React.Component {
    state = {
      isOpen: false
    }

    toggleExpand = () =>
      this.setState((state) => {
        return {
          isOpen: !state.isOpen
        }
      })

    render() {
      const { isOpen } = this.state
      return (
        <div>
          <button onClick={this.toggleExpand}>{isOpen ? 'hide' : 'show'}</button>
          <OriginalComponent isOpen={isOpen} {...this.props} />
        </div>
      )
    }
  }
