import { useState } from 'react'

const useInput = (type) => {

    const [value, setValue] = useState('') 

    const onChange = (e) => {
        setValue(e.target.value)
    }

  return {
      type,
      value, 
      onChange
  }
}

export default useInput