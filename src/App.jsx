import React from 'react'
import Country from './Country'
import Counter from './Counter'
import Todo from './Todo'

const App = () => {
  return (
    <div>
      <Counter/>
      <hr />
      <Country/>
      <hr />
      <Todo/>
    </div>
  )
}

export default App