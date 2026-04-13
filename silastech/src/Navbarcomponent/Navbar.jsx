import React, { useState } from 'react'
import { FaArrowCircleDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [page, setPage] = useState(false)
  const [feature, setFeature] = useState(false)
  return (
    <div className=' sticky top-0 z-60 backdrop-blur-2xl'>
      <nav >
      <div className='hidden lg:flex flex flex-row justify-evenly pt-5 '>
      <Link to='/' className=' hover:text-blue-600 duration-100 '>Home</Link>
      <Link to='/category' className=' hover:text-blue-600 duration-100'>Categories</Link>
      <Link to='/product' className=' hover:text-blue-600 duration-100'>Products</Link>
      <Link to='/about' className=' hover:text-blue-600 duration-100'>About Us</Link>
      <Link to='/service' className=' hover:text-blue-600 duration-100'>Services</Link>
      <Link to='/contact' className=' hover:text-blue-600 duration-100'>Contact Us</Link>
      </div>
      </nav>
      <div className='flex justify-evenly pt-3 '>
      <div className='lg:hidden '>
        <button onClick={()=>setPage(!page)}
        className='flex items-center gap-2 cursor-pointer z-60 p-3'>Pages<FaArrowCircleDown className='text-blue-600'/></button>
      </div>
      <div className='lg:hidden '>
        <button onClick={()=>setFeature(!feature)}
        className='flex items-center gap-2 cursor-pointer z-60 p-3'>Features<FaArrowCircleDown className='text-blue-600'/></button>
      </div>
      </div>
      <div>
      </div>

     <div className='flex '>
      <div className={` lg:hidden ${page?'fixed':'hidden'} cursor-pointer`}>
          <div className='flex flex-col ml-15 pt-1 bg-gray-100 px-4 py-1 text-gray-800'>
      <Link to='/' className=' hover:text-blue-600 duration-100 '>Home</Link>
      <Link to='/about' className=' hover:text-blue-600 duration-100'>About Us</Link>
      <Link to='/service' className=' hover:text-blue-600 duration-100'>Services</Link>
      <Link to='/contact' className=' hover:text-blue-600 duration-100'>Contact Us</Link>
          </div>
        </div>
        <div className={` lg:hidden ${feature?'fixed':'hidden'} cursorpointer`}>
        <div className='flex flex-col ml-50 pt-1 bg-gray-100 px-4 py-1 rounded text-gray-800'>
      <Link to='/category' className=' hover:text-blue-600 duration-100'>Categories</Link>
      <Link to='/product' className=' hover:text-blue-600 duration-100'>Products</Link>
          </div>
        </div>
        </div>
      
    </div>
  )
}

export default Navbar
