import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { getPokes } from '../../Services/ApiService'
import './pokedex.css'

const PokeList = ({setLoading}) => {

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0'
  const [list, setList] = useState([])

  useEffect(() => {
      getPokes()
      .then(res => {
        setList(res.data.results)

      })
  },[])
 
  return (
    <>
        <div className='select-poke'>
            {list.map((poke, index) => 
              <Link key={index} to={`${poke.name}`}> 
                <p onClick={() => setLoading(true)} className='poke-name'>{poke.name}</p >
              </Link> 
            )}
        </div>
        <Outlet/>
    </>
  )
}

export default PokeList