import React, { useState } from 'react'
import useInput from '../Clase 23/useInput'
import Button from 'react-bootstrap/Button';
const Login = () => {

    const [user, setUser] = useState({
        email: '',
        pass: ''
    })

    const email = useInput('text')
    const pass = useInput('password')

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({
            email: email.value,
            pass: pass.value
        })
        localStorage.setItem('logged', JSON.stringify(user))
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input data-testid='email' {...email} />
            <label>Password</label>
            <input data-testid='password' {...pass} /> 
            <button>Submit</button>
            <Button variant="info">Submit</Button>
        </form>
    </div>
  )
}

export default Login