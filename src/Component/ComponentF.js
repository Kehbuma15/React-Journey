import React, { Component } from 'react'
import { UserConsumer } from './userContext'
 class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {
          (username) => {
            return <div>HEllo {username}</div>
          }
        }
      </UserConsumer>
    )
  }
}

export default ComponentF
