import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to='/' className=''>
            <p>ET</p>
        </NavLink>
    </header>
  )
}

export default Navbar