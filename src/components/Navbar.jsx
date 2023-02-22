import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { navLinks } from '../constants'

function Navbar({ activeMenu, setActiveMenu }) {
  const logo = "items-center gap-3 ml-3 flex text-xl font-extrabold tracking-tight text-white text-slate-900";
  const navigate = useNavigate();

  function redirect() {
    navigate('/login', { replace: true })
  }

  const links = navLinks.links.map((link) => (
    <NavLink
      key={link.id}
      to={link.route}
      className='text-black'
    >
      {link.title}
    </NavLink>
  ));

  return (
    <div className={`flex p-2 md:mx-6 relative bg-cu-blue z-10 ${activeMenu ? 'justify-end' : 'justify-between'}`}>
      <NavLink
        to='/'
        className={`${logo} z-10`}
      >
        {navLinks.logo}
      </NavLink>

      <div className="bg-white w-full absolute left-0 top-0 h-screen p-10 flex justify-start items-start">
        <ul className='flex flex-col'>
          {links}
        </ul>
      </div>
    </div>
  )
}

export default Navbar