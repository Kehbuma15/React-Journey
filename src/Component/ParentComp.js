import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComponent from './MemoComponent'

 class ParentComp extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Charles'
    }
  }
  componentDidMoun() {
    setInterval(() => {
      this.setState({
        name:'Charles'
      })
    }, 2000)
  }
  
  render() {
    console.log('parent component')
    return (
      <div>
        Parent Component
        <MemoComponent name={this.state.name}/>
        {/* <RegComp name = {this.state.name}/> */}
        {/* <PureComp name = {this.state.name}/> */}
      </div>
    )
  }
}

export default ParentComp
