import React from 'react'
import { useGlobalStates } from './Context'

const ChildComponent = () => {

  const {salario, setSalario} = useGlobalStates()

  return (
    <div className='child'>
        <h3>ChildComponent</h3>
        <p>De cuanto es tu salario?</p>
        <h3>Total: {salario} </h3>
        <button onClick={() => setSalario(prev => prev + 25000)}>Pedir un aumento</button>
    </div>
  )
}

export default ChildComponent
