import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

class Loading extends React.Component {
  render() {
    const backgroundColor = {
      background: this.props.background
    }
    const loaderColor = {
      background: this.props.loaderColor
    }
    if (this.props.loading) {
      return (
        <div className="loading-background" style={backgroundColor}>
          <div className="loading-bar" >
            <div className="loading-circle-1" style={loaderColor} />
            <div className="loading-circle-2" style={loaderColor} />
          </div>
        </div>
      )
    }
    return null
  }
}

Loading.defaultProps = {
  loading: false,
  background: 'rgba(236, 240, 241, 0.7)',
  loaderColor: '#e74c3c'
}

Loading.propTypes = {
  loading: PropTypes.bool,
  background: PropTypes.string,
  loaderColor: PropTypes.string
}

export default Loading
