import React, { useState } from 'react'
import Lista from './Lista'
import PokeList from './PokeList'
import useInput from './useInput'

const Home = () => {

    const mensaje = useInput('text')
    const name = useInput('text')
    const tel = useInput('number')
    const search = useInput('text')
  return (
    <div>
        {/* <h3>{mensaje.value}</h3>
        <input {...mensaje}/>
        <h3>{name.value}</h3>
        <input {...name} />
        <h3>{tel.value}</h3>
        <input {...tel}/> */}
        <input {...search}/>
        <section>
            <Lista search={search.value}/>
        </section>
        {/* <section>
            <PokeList/>
        </section> */}
    </div>
  )
}

export default Home