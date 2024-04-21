import React, { Component } from 'react'
import withCounter from './withCounter' 
 class HoverCounter extends Component {
  
  render() {
    const {count, incremenCount} = this.props
    return <h2 onMouseOver={incremenCount}>{this.props.name} Hovered {count} times</h2>
      
  }
}

export default withCounter(HoverCounter, 10)
