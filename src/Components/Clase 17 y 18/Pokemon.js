import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import pokeLoader from './pokemongo.gif'
const Pokemon = ({loading, setLoading}) => {

    const params = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${params.pokeName.toLowerCase()}`
    const [poke, setPoke] = useState({})

    useEffect(() => {
        axios.get(url)
        .then(res => {
          setPoke(res.data)
          setTimeout(() => {
            setLoading(false)
          }, 2000)
          
        })
    }, [url, setLoading])

  return (
    <div className='poke-info'>
      { loading ?
        <img src={pokeLoader} alt=''/>
        :
        <div className='poke-stats'>
          <h2>{params.pokeName}</h2>
          <h2>{poke.name}</h2>
          <img src={poke.sprites?.front_default} alt=''/>
        </div>
      }
    </div>
  )
}

export default Pokemon