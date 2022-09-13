import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../../configRoute'

const Navbar = () => {

  const navigate = useNavigate()

  const [search, setSearch] = useState('')

  const searchPoke = (event) => {
    event.preventDefault()
    navigate(`pokemon/${search}`)
  }

  return (
    <nav className='header-fixed'>
        <Link to={routes.home}><h3>Home</h3></Link>
        <Link to={routes.pokeList}><h3>Pokelist</h3></Link>
        <Link to={routes.pokeTypes}><h3>Tipos</h3></Link>
        <form onSubmit={searchPoke}>
          <input type='text' value={search} onChange={(event) => setSearch(event.target.value)}/>
          <button >🔍</button>
        </form>
    </nav>
  )
}

export default Navbar