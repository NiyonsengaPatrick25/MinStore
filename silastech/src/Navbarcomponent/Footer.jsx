import React from 'react'
import {Link} from 'react-router-dom'
import whatsap from '../assets/icon/whatsapp.png'
import istagram from '../assets/icon/instagram.png'
import email from '../assets/icon/mail.png'
import { motion } from 'framer-motion'
const Footer = () => {
  return (
    <div>
      <div className='grid grid-cols-2 sm:grid-cols-4 justify-evenly items-center mt-20 pb-5 bg-gray-100 pl-8'>
        <motion.div
                  initial={{opacity:0, y:80}}
                  whileInView={{opacity:1, y:0}}
                  transition={{duration:0.8}}
                  viewport={{once:true}} 
        className='pt-5'>
          <h1 className=' text-3xl text-gray-500 font-bold'><span className='text-blue-600'>Silas</span> Tech</h1>
          <p className='text-xl'>We Here For You</p>
        </motion.div>
        <motion.div 
                initial={{opacity:0, y:80}}
                  whileInView={{opacity:1, y:0}}
                  transition={{duration:0.8}}
                  viewport={{once:true}}
        className='pt-5 flex flex-col'>
          <h1 className='text-xl font-bold'>Quick Links</h1>
          <Link to='/' className='hover:underline cursor-pointer duration-75 linear'>Home</Link>
          <Link to='/category' className='hover:underline cursor-pointer duration-75 linear'>Categories</Link>
          <Link to='/product' className='hover:underline cursor-pointer duration-75 linear'>Product</Link>
          <Link to='/about' className='hover:underline cursor-pointer duration-75 linear'>About Us</Link>
          <Link to='/service' className='hover:underline cursor-pointer duration-75 linear'>Services</Link>
          <Link to='/contact' className='hover:underline cursor-pointer duration-75 linear'>Contact Us</Link>
        </motion.div>
        <motion.div 
                  initial={{opacity:0, y:80}}
                  whileInView={{opacity:1, y:0}}
                  transition={{duration:0.8}}
                  viewport={{once:true}}
        className='pt-5'>
          <h1 className='text-xl font-bold'>Contact Us</h1>
          <h2 className=' font-semibold'>Email:</h2>
          <p className=''>silas@gmail.com</p>
          <h3 className=' font-semibold'>Phone:</h3>
          +25078888888
          <h4 className=' font-semibold'>Address:</h4>
          <p>Merezi2,Gikondo,Kigali</p>
        </motion.div>
        <motion.div 
                  initial={{opacity:0, y:80}}
                  whileInView={{opacity:1, y:0}}
                  transition={{duration:0.8}}
                  viewport={{once:true}}
        className='pt-5'>
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
        </motion.div>
      </div>
      <div className='bottom-0 mb-0 w-full text-center text-white bg-gray-500 p-2'>
        <p>&copy;2026.designed by Niyonsenga Patrick</p>
      </div>
    </div>
  )
}

export default Footer;
