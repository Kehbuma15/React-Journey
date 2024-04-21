import React, { Component } from 'react'
import LifecycleB from './LifecycleB'
 class LifecycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'Charles'
    }
    console.log('Lifecycle constructor')
  }
  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps')
    return null
  }
  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate')
    return true
  }
  getSnapshotBeforeUpdate() {
    console.log('LifecycleA getSnapshotBeforeUpdate')
    return null
  }
  componentDidUpdate() {
    console.log('LifecyceA componentDidUpdate')
  }

  changeState = () => {
    this.setState({
      name: 'CodeCharles'
    })
  }
  
  render() {
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB/>
      </div>
    )
  }
}

export default LifecycleA
