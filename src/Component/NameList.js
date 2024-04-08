import React from 'react'
import Person from './Person'

function NameList() {
  const names = ['Bruce', 'Charles', 'Lima', 'Bruce']
  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Charles',
      age: 69,
      skill: 'flutter'
    },
    {
      id: 3,
      name: 'Lima',
      age: 98,
      skill: 'Dart'
    }
  ]
  const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
  return <div>{nameList}</div>
    
}

export default NameList
