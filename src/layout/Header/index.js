import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
import {BackButton} from '../../components'

const Header = () => {
  
  const activeClass = (({isActive}) => isActive? 'current':undefined)

  return (
    <nav>
      <NavLink to='/' className={activeClass} end>Home</NavLink>
      <NavLink to='albums' className={activeClass}>Albums</NavLink>
      <NavLink to='findArtist' className={activeClass}>Discover</NavLink>
      <NavLink to='about' className={activeClass}>About</NavLink>

      <BackButton/>
    </nav>
  )
}

export default Header


// <Route path="/" element={<Pages.Home/>}/>
// <Route path="/albums" element={<Pages.Albums/>}/>
// <Route path="/findArtist" element={<Pages.FindArtist/>}/>
// <Route path="/About" element={<Pages.About/>}/>
// <Route path='*' element={<Pages.NotFound/>}/>
