import React, { Component } from 'react'

 class UserGreeting extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn : true
    }
  }
  
  render() {

    // fourth approach
    return this.state.isLoggedIn && <div>Welcome Charles</div>

    // third approach
      // return(
      //   this.state.isLoggedIn ? (
      //     <div>Welcome Charles</div>
      //   )  : (
      //     <div>Welcome Guest</div>
      //   )
      //   )

      //second approach
    // let message
    // if(this.state.isLoggedIn) {
    //   message = <div>Welcome Charles</div>
    // } else {
    //   message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>

    //first approach
    // if(this.state.isLoggedIn) {
    //   return(
    //     <div>Welcome Charles</div>
    //   )
    // } else {
    //   return(
    //     <div>Welcome Guest</div>
    //   )
    // }
    // return (
    //   <div>
    //     <div>Welcome Charles</div>
    //     <div>Welcome Lima</div>
      
    //   </div>
    // )
  }
}

export default UserGreeting
