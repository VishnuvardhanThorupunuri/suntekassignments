import React from 'react'
import B from './components/B'
import C from './components/C'
import A from './components/A'

function App() {
  return (
    <div className='flex justify-around mt-16 '>
      <A />
      <B />
      <C />
    </div>
  )
}

export default App