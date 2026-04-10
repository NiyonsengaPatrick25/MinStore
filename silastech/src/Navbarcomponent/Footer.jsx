import React from 'react'
import {Link} from 'react-router-dom'
import whatsap from '../assets/icon/whatsapp.png'
import istagram from '../assets/icon/instagram.png'
import email from '../assets/icon/mail.png'
const Footer = () => {
  return (
    <div>
      <div className='flex flex-row justify-evenly items-center mt-20 pb-5 bg-gray-100'>
        <div>
          <h1 className=' text-3xl text-gray-500 font-bold'><span className='text-blue-600'>Silas</span> Tech</h1>
          <p className='text-xl'>We Here For You</p>
        </div>
        <div className='pt-5'>
          <h1 className='text-xl font-bold'>Quick Links</h1>
          <p className='hover:underline cursor-pointer duration-75 linear'>Home</p>
          <p className='hover:underline cursor-pointer duration-75 linear'>Categories</p>
          <p className='hover:underline cursor-pointer duration-75 linear'>Product</p>
          <p className='hover:underline cursor-pointer duration-75 linear'>About Us</p>
          <p className='hover:underline cursor-pointer duration-75 linear'>Services</p>
          <p className='hover:underline cursor-pointer duration-75 linear'>Contact Us</p>
        </div>
        <div className='pt-5'>
          <h1 className='text-xl font-bold'>Contact Us</h1>
          <h2 className=' font-semibold'>Email:</h2>
          <p className=''>silas@gmail.com</p>
          <h3 className=' font-semibold'>Phone:</h3>
          +25078888888
          <h4 className=' font-semibold'>Address:</h4>
          <p>Merezi2,Gikondo,Kigali</p>
        </div>
        <div>
          <h1 className='text-xl font-bold px-5 pb-3'>Text On</h1>
          <div className='flex flex-row gap-5'>
            
            <div>
          <Link to='https://wa.me/250791602044' target='_blank'><img src={whatsap} alt=""  className='w-8 h-8 rounded-full shadow-md shadow-blue-800 hover:scale-120 duration-100 ease-in-out cursor-pointer'/></Link>
            </div>

            <div>
          <Link to='https://instagram.com/silastech' target='_blank'><img src={istagram} alt=""  className='w-8 h-8 rounded-full shadow-md shadow-blue-800 hover:scale-120 duration-100 ease-in-out cursor-pointer'/></Link>
            </div>

            <div>
          <Link to='mailto:silastech@gmail.com'><img src={email} alt=""  className='w-8 h-8 rounded-full shadow-md shadow-blue-800 hover:scale-120 duration-100 ease-in-out cursor-pointer'/></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-0 mb-0 w-full text-center text-white bg-gray-500 p-2'>
        <p>&copy;2026.designed by Niyonsenga Patrick</p>
      </div>
    </div>
  )
}

export default Footer;
