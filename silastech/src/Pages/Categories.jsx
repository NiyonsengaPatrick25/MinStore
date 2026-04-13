import React from 'react'
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'
// impoort image category
import phone from '../assets/phones/phones (8).jpg'
import watch from '../assets/watches/wacthes (9).jpg'
import haedphone from '../assets/headphones/headphones (8).jpg'
import smartwatch from '../assets/smartwatch/smartwatch (10).jpg'
import accessories from '../assets/accessories/accessories (2).jpg'
import speaker from '../assets/bluethooth speaker/bluethooth speaker (7).jpg'
//end
const Categories = () => {
  return (
    <motion.div 
    initial={{opacity:0, y:-40}}
    animate={{opacity:1 , y:0}}
    className=''>
     {/* start category home */}
          <div className='mt-20 mx-10'>
            <h1 className='text-3xl font-bold text-blue-600 text-center pb-8 '>Categories</h1>
            <motion.section 
            className='flex flex-col md:flex-row lg:flex-row justify-evenly items-center gap-8'>
              <motion.div 
               initial={{opacity:0 , y:50}}
             animate={{opacity:1, y:0}}
             transition={{delay:0.3}}
              className='shadow-lg p-7 rounded-3xl shadow-blue-600'>
              <Link to='/phone' ><img src={phone} alt="" className='w-50 h-50 rounded-full cursor-pointer hover:opacity-60 bg-linear-30 duration-100'/></Link>
              <p className='text-center text-xl'>Phones</p>
              </motion.div>
              <motion.div 
               initial={{opacity:0 , y:50}}
             animate={{opacity:1, y:0}}
             transition={{delay:0.3}}
              className='shadow-lg p-7 rounded-3xl shadow-blue-600'>
              <Link to='/watch'><img src={watch} alt="" className='w-50 h-50 rounded-full cursor-pointer hover:opacity-60 bg-linear-30 duration-100' /></Link>
              <p className='text-center text-xl'>Watches</p>
              </motion.div>
              <motion.div 
               initial={{opacity:0 , y:50}}
             animate={{opacity:1, y:0}}
             transition={{delay:0.3}}
              className='shadow-lg p-7 rounded-3xl shadow-blue-600 '>
              <Link to='/headphone'><img src={haedphone} alt="" className='w-50 h-50 rounded-full cursor-pointer hover:opacity-60 bg-linear-30 duration-100'/></Link>
              <p className='text-center text-xl'>HeadPhones</p>
              </motion.div>
            </motion.section >

            <motion.section
             className='flex flex-col md:flex-row lg:flex-row justify-evenly items-center pt-25 gap-8'>
              <motion.div 
              initial={{opacity:0 , y:50}}
             animate={{opacity:1, y:0}}
             transition={{delay:0.3}}
              className='shadow-lg p-7 rounded-3xl shadow-blue-600'>
              <Link to='/smartwatch'><img src={smartwatch} alt="" className='w-50 h-50 rounded-full cursor-pointer hover:opacity-60 bg-linear-30 duration-100'/></Link>
              <p className='text-center text-xl'>Smart Watch</p>
              </motion.div>
              <motion.div 
              initial={{opacity:0 , y:50}}
             animate={{opacity:1, y:0}}
             transition={{delay:0.3}}
              className='shadow-lg p-7 rounded-3xl shadow-blue-600'>
              <Link to='/accessories'><img src={accessories} alt="" className='w-50 h-50 rounded-full cursor-pointer hover:opacity-60 bg-linear-30 duration-100'/></Link>
              <p className='text-center text-xl'>Accessories</p>
              </motion.div>
              <motion.div
              initial={{opacity:0 , y:50}}
             animate={{opacity:1, y:0}}
             transition={{delay:0.3}} 
              className='shadow-lg p-7 rounded-3xl shadow-blue-600'>
              <Link to='/speaker'><img src={speaker} alt="" className='w-50 h-50 rounded-full cursor-pointer hover:opacity-60 bg-linear-30 duration-100'/></Link>
              <p className='text-center text-xl'>Bluetooth Speaker</p>
              </motion.div>
            </motion.section>
          </div> 
          {/* end category home */}
    </motion.div>
  )
}

export default Categories
