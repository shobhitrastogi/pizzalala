import React from 'react'

import { Link } from 'react-router-dom';
import Logo from '../assets/pizzaLogo.png';
const Navbar = () => {
  return (
   <>
   <header className="text-white body-font bg-black">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img className='w-20' src={Logo} alt="" />
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-4xl">
      <Link  to='/'className="mr-5 ">Home</Link>
      <Link to='/about' className="mr-5 ">About</Link>
      <Link to='/menu' className="mr-5 ">Menu</Link>
      <Link to='/contact' className="mr-5 ">Contact</Link>
      <Link to='/cart' className="mr-5 ">Cart</Link>
    </nav>
  </div>
</header>
   </>
  )
}

export default Navbar