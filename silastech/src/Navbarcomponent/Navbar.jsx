import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className=''>
      <div className='flex flex-row justify-evenly pt-5 '>
      <Link to='/' className=' hover:text-blue-600 duration-100 '>Home</Link>
      <Link to='/category' className=' hover:text-blue-600 duration-100'>Categories</Link>
      <Link to='/product' className=' hover:text-blue-600 duration-100'>Products</Link>
      <Link to='/about' className=' hover:text-blue-600 duration-100'>About Us</Link>
      <Link to='/service' className=' hover:text-blue-600 duration-100'>Services</Link>
      <Link to='/contact' className=' hover:text-blue-600 duration-100'>Contact Us</Link>
      </div>
    </div>
  )
}

export default Navbar
