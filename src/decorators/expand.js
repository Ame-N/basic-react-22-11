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
      return <OriginalComponent {...this.props} isOpen={isOpen} expand={this.toggleExpand} />
    }
  }
