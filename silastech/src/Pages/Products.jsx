import React from 'react'
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'
// import image product
import accessory from '../assets/accessories/accessories (1).jpg'
import watc from '../assets/watches/wacthes (2).jpg'
import phon from '../assets/phones/phones (5).jpg'
import headphon from '../assets/headphones/headphones (1).jpg'
import smartwatch from '../assets/smartwatch/smartwatch (16).jpg'
import speaker from '../assets/bluethooth speaker/bluethooth speaker (1).jpg'
// end

const Products = () => {
  return (
    <motion.div 
    initial={{opacity:0, y:-40}}
    animate={{opacity:1, y:0}}
    className=''>
      {/* start product home */}

      <div className='mt-20'>
          <h1 className='text-3xl font-bold text-blue-600 text-center pt-5'>Products</h1>
    <div className=' grid grid-cols-2 sm:grid-cols-4 justify-between items-center max-w-7xl mx-auto pl-4 mt-10'>
          <motion.div>
            <motion.div
        initial={{opacity:0 , y:50}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.3}}
        className='pt-8'
            >
          <img src={accessory} alt="" className='w-40 h-40 rounded-full cursor-pointer shadow-md shadow-blue-600 hover:scale-95 linear duration-75 transition-all'/>
          <Link to='https://wa.me/250791602044' target='_blank'><button className='mx-6 border px-2 py-1 outline-none mt-3  bg-blue-600 hover:bg-blue-500 text-white 
          cursor-pointer rounded-xl  '>More Details</button></Link>
          </motion.div>
          <motion.div
        initial={{opacity:0 , y:50}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.3}}
        className='pt-8'
          >
          <img src={watc} alt="" className='w-40 h-40 rounded-full cursor-pointer shadow-md shadow-blue-600 hover:scale-95 linear duration-75 transition-all'/>
          <Link to='https://wa.me/250791602044' target='_blank'><button className='mx-6 border px-2 py-1 outline-none mt-3  bg-blue-600 hover:bg-blue-500 text-white 
          cursor-pointer rounded-xl  '>More Details</button></Link>

          </motion.div>
          <motion.div
        initial={{opacity:0 , y:50}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.3}}
        className='pt-8'
          >
          <img src={phon} alt=""  className='w-40 h-40 rounded-full cursor-pointer shadow-md shadow-blue-600 hover:scale-95 linear duration-75 transition-all'/>
          <Link to='https://wa.me/250791602044' target='_blank'><button className='mx-6 border px-2 py-1 outline-none mt-3  bg-blue-600 hover:bg-blue-500 text-white 
          cursor-pointer rounded-xl  '>More Details</button></Link>
          </motion.div>
          </motion.div>
          <motion.div className=''>
            <motion.div
        initial={{opacity:0 , y:50}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.3}}
        className='pt-8'
            >
          <img src={headphon} alt=""  className='w-40 h-40 rounded-full cursor-pointer shadow-md shadow-blue-600 hover:scale-95 linear duration-75 transition-all'/>
          <Link to='https://wa.me/250791602044' target='_blank'><button className='mx-6 border px-2 py-1 outline-none mt-3  bg-blue-600 hover:bg-blue-500 text-white 
          cursor-pointer rounded-xl  '>More Details</button></Link>
          </motion.div>
          <motion.div
          initial={{opacity:0 , y:50}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.3}} 
        className='pt-8'
          >
          <img src={smartwatch} alt=""  className='w-40 h-40 rounded-full cursor-pointer shadow-md shadow-blue-600 hover:scale-95 linear duration-75 transition-all'/>
          <Link to='https://wa.me/250791602044' target='_blank'><button className='mx-6 border px-2 py-1 outline-none mt-3  bg-blue-600 hover:bg-blue-500 text-white 
          cursor-pointer rounded-xl  '>More Details</button></Link>
          </motion.div>
          <motion.div
        initial={{opacity:0 , y:50}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.3}}
        className='pt-8'
          >
          <img src={speaker} alt=""  className='w-40 h-40 rounded-full cursor-pointer shadow-md shadow-blue-600 hover:scale-95 linear duration-75 transition-all'/>
          <Link to='https://wa.me/250791602044' target='_blank'><button className='mx-6 border px-2 py-1 outline-none mt-3  bg-blue-600 hover:bg-blue-500 text-white 
          cursor-pointer rounded-xl  '>More Details</button></Link>
          </motion.div>
          </motion.div>
          <motion.div className=' '>
            <motion.iv
        initial={{opacity:0 , y:50}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.3}}
        className='pt-8'
        >
          <img src={accessory} alt="" className='w-40 h-40 rounded-full cursor-pointer shadow-md shadow-blue-600 hover:scale-95 linear duration-75 transition-all'/>
          <Link to='https://wa.me/250791602044' target='_blank'><button className='mx-6 border px-2 py-1 outline-none mt-3  bg-blue-600 hover:bg-blue-500 text-white 
          cursor-pointer rounded-xl  '>More Details</button></Link>
          </motion.iv>
          <motion.div
           initial={{opacity:0 , y:50}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.3}}
        className='pt-8'
          >
          <img src={watc} alt="" className='w-40 h-40 rounded-full cursor-pointer shadow-md shadow-blue-600 hover:scale-95 linear duration-75 transition-all'/>
          <Link to='https://wa.me/250791602044' target='_blank'><button className='mx-6 border px-2 py-1 outline-none mt-3  bg-blue-600 hover:bg-blue-500 text-white 
          cursor-pointer rounded-xl  '>More Details</button></Link>

          </motion.div>
          <motion.div
           initial={{opacity:0 , y:50}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.3}}
        className='pt-8'
          >
          <img src={phon} alt=""  className='w-40 h-40 rounded-full cursor-pointer shadow-md shadow-blue-600 hover:scale-95 linear duration-75 transition-all'/>
          <Link to='https://wa.me/250791602044' target='_blank'><button className='mx-6 border px-2 py-1 outline-none mt-3  bg-blue-600 hover:bg-blue-500 text-white 
          cursor-pointer rounded-xl  '>More Details</button></Link>
          </motion.div>
          </motion.div>
          <div>
            <motion.div
             initial={{opacity:0 , y:50}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.3}}
        className='pt-8'
            >
          <img src={headphon} alt=""  className='w-40 h-40 rounded-full cursor-pointer shadow-md shadow-blue-600 hover:scale-95 linear duration-75 transition-all'/>
          <Link to='https://wa.me/250791602044' target='_blank'><button className='mx-6 border px-2 py-1 outline-none mt-3  bg-blue-600 hover:bg-blue-500 text-white 
          cursor-pointer rounded-xl  '>More Details</button></Link>
          </motion.div>
          <motion.div
           initial={{opacity:0 , y:50}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.3}}
        className='pt-8'
          >
          <img src={smartwatch} alt=""  className='w-40 h-40 rounded-full cursor-pointer shadow-md shadow-blue-600 hover:scale-95 linear duration-75 transition-all'/>
          <Link to='https://wa.me/250791602044' target='_blank'><button className='mx-6 border px-2 py-1 outline-none mt-3  bg-blue-600 hover:bg-blue-500 text-white 
          cursor-pointer rounded-xl  '>More Details</button></Link>
          </motion.div>
          <motion.div
        initial={{opacity:0 , y:50}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.3}}
        className='pt-8'
          >
          <img src={speaker} alt=""  className='w-40 h-40 rounded-full cursor-pointer shadow-md shadow-blue-600 hover:scale-95 linear duration-75 transition-all'/>
          <Link to='https://wa.me/250791602044' target='_blank'><button className='mx-6 border px-2 py-1 outline-none mt-3  bg-blue-600 hover:bg-blue-500 text-white 
          cursor-pointer rounded-xl  '>More Details</button></Link>
          </motion.div>
          </div>
      </div>
      </div>
            {/* end product home */}
    </motion.div>
  )
}

export default Products
