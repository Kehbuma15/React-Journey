import React from "react";

/*Writing the Hello component using jsx*/

// const Hello = () =>{
//   return(
//     <div className = "myClass">
//       <h1>Hello Charles</h1>
//     </div>
//   )
// }

/*Writing the Hello component using JSX*/

const Hello = () =>{
   return React.createElement(
    'div',
   {id: 'hello', className: 'myClass'},
    React.createElement('h1', null, 'Hello Charles'))
}

export default Hello