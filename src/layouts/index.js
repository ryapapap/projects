import React from 'react'
import Bio from '../components/Bio'
import './layout.css'

class Template extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <div className="new-layout-container">
          {children()}
        </div>
      </div>);
  }
}

export default Template
