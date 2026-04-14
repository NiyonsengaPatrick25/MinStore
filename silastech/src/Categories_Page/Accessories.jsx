import React from 'react'
import {Link} from 'react-router-dom'
import accessory from '../assets/accessories/accessories (1).jpg'
import watc from '../assets/accessories/accessories (2).jpg'
import phon from '../assets/accessories/accessories (3).jpg'
import headphon from '../assets/accessories/accessories (4).jpg'
import smartwatch from '../assets/accessories/accessories (5).jpg'
import { motion } from 'framer-motion'


const Accessories = () => {
  return (
    <motion.div
    initial={{opacity:0, x:-100}}
    animate={{opacity:1, x:0}}
    transition={{duration:0.5}}
    >
        <div className='mt-15'>
                <motion.h1 
                className='text-3xl text-center pt-5  font-bold text-blue-600'>Accessories</motion.h1>
              <section >
                <div className='grid grid-cols-2 sm:grid-cols-4 justify-between items-center max-w-7xl mx-auto pl-4 mt-10 '>
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
                <img src={accessory} alt="" className='w-40 h-40 rounded-full cursor-pointer shadow-md shadow-blue-600 hover:scale-95 linear duration-75 transition-all'/>
                <Link to='https://wa.me/250791602044' target='_blank'><button className='mx-6 border px-2 py-1 outline-none mt-3  bg-blue-600 hover:bg-blue-500 text-white 
                cursor-pointer rounded-xl  '>More Details</button></Link>
                </div>

                </div>
               
              </section>

      </div>
    </motion.div>
  )
}

export default Accessories
