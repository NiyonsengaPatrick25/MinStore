import React from 'react'
import {Link} from 'react-router-dom'
import accessory from '../assets/phones/phones (1).jpg' 
import watc from '../assets/phones/phones (2).jpg' 
import phon from '../assets/phones/phones (3).jpg' 
import headphon from '../assets/phones/phones (7).jpg' 
import smartwatch from '../assets/phones/phones (4).jpg' 
import speaker from '../assets/phones/phones (5).jpg' 
import { motion } from 'framer-motion'
const Phones = () => {
  return (
    <motion.div 
    initial={{opacity:0, x:-100}}
    animate={{opacity:1, x:0}}
    transition={{duration:0.5}}
    >
      <div className='mt-15'>
                <h1 className='text-3xl text-center pt-5 font-bold text-blue-600'>Bluetooth Speaker</h1>
      
              <section >
                <div className='flex flex-row justify-evenly items-center pt-10 '>
                  <div>
                <img src={accessory} alt="" className='w-40 h-40 rounded-full cursor-pointer shadow-md shadow-blue-600 hover:scale-95 linear duration-75 transition-all'/>
                <Link to='https://wa.me/250791602044' target='_blank'><button className='mx-6 border px-2 py-1 outline-none mt-3  bg-blue-600 hover:bg-blue-500 text-white 
                cursor-pointer rounded-xl  '>More Details</button></Link>
                </div>
                <div>
                <img src={watc} alt="" className='w-40 h-40 rounded-full cursor-pointer shadow-md shadow-blue-600 hover:scale-95 linear duration-75 transition-all'/>
                <Link to='https://wa.me/250791602044' target='_blank'><button className='mx-6 border px-2 py-1 outline-none mt-3  bg-blue-600 hover:bg-blue-500 text-white 
                cursor-pointer rounded-xl  '>More Details</button></Link>
      
                </div>
                <div>
                <img src={phon} alt=""  className='w-40 h-40 rounded-full cursor-pointer shadow-md shadow-blue-600 hover:scale-95 linear duration-75 transition-all'/>
                <Link to='https://wa.me/250791602044' target='_blank'><button className='mx-6 border px-2 py-1 outline-none mt-3  bg-blue-600 hover:bg-blue-500 text-white 
                cursor-pointer rounded-xl  '>More Details</button></Link>
                </div>
                </div>
                <div className='flex flex-row justify-evenly items-center mt-10'>
                  <div>
                <img src={headphon} alt=""  className='w-40 h-40 rounded-full cursor-pointer shadow-md shadow-blue-600 hover:scale-95 linear duration-75 transition-all'/>
                <Link to='https://wa.me/250791602044' target='_blank'><button className='mx-6 border px-2 py-1 outline-none mt-3  bg-blue-600 hover:bg-blue-500 text-white 
                cursor-pointer rounded-xl  '>More Details</button></Link>
                </div>
                <div>
                <img src={smartwatch} alt=""  className='w-40 h-40 rounded-full cursor-pointer shadow-md shadow-blue-600 hover:scale-95 linear duration-75 transition-all'/>
                <Link to='https://wa.me/250791602044' target='_blank'><button className='mx-6 border px-2 py-1 outline-none mt-3  bg-blue-600 hover:bg-blue-500 text-white 
                cursor-pointer rounded-xl  '>More Details</button></Link>
                </div>
                 <div>
                <img src={speaker} alt="" className='w-40 h-40 rounded-full cursor-pointer shadow-md shadow-blue-600 hover:scale-95 linear duration-75 transition-all'/>
                <Link to='https://wa.me/250791602044' target='_blank'><button className='mx-6 border px-2 py-1 outline-none mt-3  bg-blue-600 hover:bg-blue-500 text-white 
                cursor-pointer rounded-xl  '>More Details</button></Link>
                </div>
                </div>
              </section>

      </div>
    </motion.div>
  )
}

export default Phones
