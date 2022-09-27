import React from 'react'
import useFetch from './useFetch'

const PokeList = () => {

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0'
    const pokeList = useFetch(url)
    console.log(pokeList)

  return (
    <div>
        {
            pokeList.data?.results.map(poke => 
                <p className='poke-name'>{poke.name}</p >
                )
        }
        </div>
  )
}

export default PokeList