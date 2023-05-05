import React from 'react'
import { NavLink } from 'react-router-dom'
import Money from '../assets/Money.png';

const links = [
  {name: 'Список валют', to: '/currency'},
  {name: 'Конвертер', to: '/'}
]

const Header = () => {
  return (
    <div className='header'>
      <div className='header__left'>
        {links.map(link => (
          <NavLink
            key={link.name}
            to={link.to}
            activeClassName='active'
            className='link link--animated'
          >
            {link.name}
          </NavLink>
        ))}
      </div>
      <img className='header__logo' src={Money} alt='logo'/>
    </div>
  )
}

export default Header
