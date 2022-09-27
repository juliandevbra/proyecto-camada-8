import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Home = () => {


  return (
    <div>
        <section className='header-container'>
          <Navbar/>
        </section>
        <Outlet/>
    </div>
  )
}

export default Home