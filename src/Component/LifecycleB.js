import React, { Component } from 'react'

 class LifecycleB extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'Lima'
    }
  }
  shouldComponentUpdate() {
    console.log('LifecycleB shouldComponentUpdate')
    return true
  }
  getSnapshotBeforeUpdate() {
    console.log('LifecycleB getSnapshotBeforeUpdate')
    return null
  }
  componentDidUpdate() {
    console.log('LifecyceB componentDidUpdate')
  }
  
  render() {
    console.log('LifecycleB render')
    return (
      <div>
        Lifecycle A
      </div>
    )
  }
}

export default LifecycleB
