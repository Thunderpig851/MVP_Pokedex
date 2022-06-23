import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError (error) {
    return { error }
  }

  componentDidCatch (error, info) {
    console.error('Error:', error, info)
  }

  render () {
    const { children } = this.props
    const { error } = this.state

    if (error) {
      const errorMessage = this.props.fallback || 'Error During render.'
      return <div>{errorMessage}</div>
    }
    return children
  }
}

export default ErrorBoundary
