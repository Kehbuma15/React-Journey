import React, { Component } from 'react'
import FRInput from './FRInput'

export class FRParentInput extends Component {
  constructor(props) {
    super(props)
  
    this.inputRef = React.createRef()
  }
  
  render() {
    return (
      <div>
        <button>Focus Input</button>
      </div>
    )
  }
}

export default FRParentInput
