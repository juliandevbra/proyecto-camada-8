import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import pokeLoader from './pokemongo.gif'
import { useGlobalStates } from '../Clase 25/Context'

const Pokemon = ({loading, setLoading}) => {

    const params = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${params.pokeName.toLowerCase()}`
    const [poke, setPoke] = useState({})
    
    const { pokePlantel, setPokePlantel } = useGlobalStates()
    console.log(pokePlantel)
    useEffect(() => {
        axios.get(url)
        .then(res => {
          setPoke(res.data)
          setTimeout(() => {
            setLoading(false)
          }, 1000)
        })
    }, [url, setLoading])

  return (
    <div className='poke-info'>
      { loading ?
        <img src={pokeLoader} alt='' style={{margin: 'auto'}}/>
        :
        <div className='poke-stats'>
          <h2>{poke.name}</h2>
          <img src={poke.sprites?.front_default} alt=''/>
          <button onClick={() => setPokePlantel([...pokePlantel , poke])} >Agregar pokemon al plantel</button>
        </div>
      }
    </div>
  )
}

export default Pokemon