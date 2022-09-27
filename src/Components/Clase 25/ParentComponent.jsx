import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {

 
  return (
    <div className='parent'>
        <h1>ParentComponent</h1>
        <ChildComponent  />

    </div>
  )
}

export default ParentComponent