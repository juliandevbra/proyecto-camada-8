import React from 'react'
import { useParams } from 'react-router-dom'

const TypeFilter = () => {

    const params = useParams()
    console.log(params)
  return (
    <div>{params.type}</div>
  )
}

export default TypeFilter