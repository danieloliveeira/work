import '../index.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
        <Link to='/work' className='icon'>Beginners</Link>
        <ul>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/profile">Perfil</Link>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar