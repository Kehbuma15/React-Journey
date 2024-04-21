import React, { Component } from 'react'
import withCounter from './withCounter'

 class ClickCounter extends Component {
 
  
  render() {
    const {count, incremenCount} = this.props

    return (
      <div>
        <button onClick={incremenCount}>{this.props.name}Click {count} times</button>
      </div>
    )
  }
}

export default withCounter(ClickCounter, 5)
