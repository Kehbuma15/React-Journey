import React from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
  
    incremenCount = () => {
      this.setState(prevState => {
        return {
          count: prevState.count + incrementNumber
        }
      })
    }
    render() {
      return <WrappedComponent count={this.state.count} incremenCount={this.incremenCount} {...this.props} />
    }
  }
  return WithCounter
}

export default withCounter