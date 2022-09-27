import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
// import { getPokes } from '../../Services/ApiService'
import './pokedex.css'
import Swal from 'sweetalert2'

const PokeList = ({setLoading}) => {

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0'
  const [list, setList] = useState([])

  useEffect(() => {
    // ejemplo con axios y .then
      // axios.get(url)
      // .then(res => {
      //   setList(res.data.results)
      // })
      // .catch(err => console.log(err))

      //Ejemplo con axios, async/await y try/catch
      const fetchData = async () => {
        try {
          const response = await axios.get(url)
          setList(response.data.results)
        }
        catch (err) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.toString(),
              footer: '<a href="">Why do I have this issue?</a>'
            })
        }
      }
      fetchData()
  },[])

  return (
    <>
        <div className='select-poke'>
          {}
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