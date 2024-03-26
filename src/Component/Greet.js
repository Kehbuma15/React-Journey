import React from 'react'

//Destrucutring props in the function parameter
const Greet = ({name, heroName}) => {

  return (
    <div>
      <h1>Hello {name} aka {heroName}</h1>
      
    </div>
    )
    } 

    // Destructuring in the function body
// const Greet = props =>{
//   const {name, heroName} = props
// return (
// <div>
//   <h1>Hello {name} aka {heroName}</h1>
  
// </div>
// )
// } 

export default Greet