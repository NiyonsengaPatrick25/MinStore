import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
// impoort image category
import phone from '../assets/phones/phones (8).jpg'
import watch from '../assets/watches/wacthes (9).jpg'
import haedphone from '../assets/headphones/headphones (8).jpg'
//end

// import image product
import accessory from '../assets/accessories/accessories (1).jpg'
import watc from '../assets/watches/wacthes (2).jpg'
import phon from '../assets/phones/phones (5).jpg'
import headphon from '../assets/headphones/headphones (1).jpg'
import smartwatch from '../assets/smartwatch/smartwatch (16).jpg'
import speaker from '../assets/bluethooth speaker/bluethooth speaker (1).jpg'
// end

// import image repair
import repair from '../assets/repaire/repaire (13).jpg'
import repai from '../assets/repaire/repaire (12).jpg'
import repa from '../assets/repaire/repaire (8).jpg'
import rep from '../assets/repaire/repaire (6).jpg'
// end image repair


const Home = () => {
  return (
    
    <div className=''>
      <motion.div 
      initial={{opacity:0 , y:-100}}
      animate={{opacity:1, y:0}}
      transition={{duration:0.8}}
      className='text-center pt-20'>
        <h1 className='text-4xl'>Welcome To Our Customers</h1>
        <h2 className='text-3xl'>Everything you need are here</h2>
        <h3 className='text-2xl text-gray-500 animate-bounce duration-100 linear pt-5'><span className='text-blue-600'>Silas</span> Tech</h3>
      </motion.div>
      {/* start category home */}
      <motion.div 
      >
      <motion.div 
      initial={{opacity:0, y:80}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.8}}
      viewport={{once:true}}
      className='mt-20 mx-10'>
        <h1 className='text-3xl text-center pb-8 font-bold text-blue-600'>Categories</h1>
        <motion.section
        className='flex flex-row justify-evenly items-center'>
          <div className='shadow-lg p-7 rounded-3xl shadow-blue-600'>
        <Link to='/phone'><img src={phone} alt="" className='w-50 h-50 rounded-full cursor-pointer hover:opacity-60 bg-linear-30 duration-100'/></Link>
        <p className='text-center text-xl'>Phones</p>
        </div>
        <div className='shadow-lg p-7 rounded-3xl shadow-blue-600'>
       <Link to='/watch'><img src={watch} alt="" className='w-50 h-50 rounded-full cursor-pointer hover:opacity-60 bg-linear-30 duration-100' /></Link>
        <p className='text-center text-xl'>Watches</p>
        </div>
        <div className='shadow-lg p-7 rounded-3xl shadow-blue-600 '>
        <Link to='/headphone'><img src={haedphone} alt="" className='w-50 h-50 rounded-full cursor-pointer hover:opacity-60 bg-linear-30 duration-100'/></Link>
        <p className='text-center text-xl'>HeadPhones</p>
                     </div>
          <Link to='category' className='hover:text-blue-600 hover:underline duration-100'>View all</Link>
        </motion.section>
      </motion.div>
      {/* end category home */}

      {/* start product home */}

      <motion.div 
      initial={{opacity:0, y:80}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.8}}
      viewport={{once:true}}
      className='mt-20'>
          <h1 className='text-3xl text-center pt-5 font-bold text-blue-600'>Products</h1>

        <section >
          <motion.div 

          className='flex flex-row justify-evenly items-center pt-10 '>
            <div>
          <img src={accessory} alt="" className='w-40 h-40 rounded-full cursor-pointer shadow-md shadow-blue-600 hover:scale-95 linear duration-75 transition-all'/>
          <Link to='https://wa.me/250791602044' target='_blank'><motion.button className='mx-6 border px-2 py-1 outline-none mt-3  bg-blue-600 hover:bg-blue-500 text-white 
          cursor-pointer rounded-xl  '>More Details</motion.button></Link>
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
          </motion.div>
          <motion.div 
          initial={{opacity:0, y:80}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.8}}
          viewport={{once:true}}

          className='flex flex-row justify-evenly items-center mt-10'>
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
          <img src={speaker} alt=""  className='w-40 h-40 rounded-full cursor-pointer shadow-md shadow-blue-600 hover:scale-95 linear duration-75 transition-all'/>
          <Link to='https://wa.me/250791602044' target='_blank'><button className='mx-6 border px-2 py-1 outline-none mt-3  bg-blue-600 hover:bg-blue-500 text-white 
          cursor-pointer rounded-xl  '>More Details</button></Link>
          </div>
          </motion.div>
          <Link to='/produt' className='mx-110 hover:text-blue-600 duration-100 hover:underline '>View All</Link>
        </section>
      </motion.div>
            {/* end product home */}

            {/* start repair home */}
            
              <motion.div 
              initial={{opacity:0, y:80}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.8}}
              viewport={{once:true}}
              
              
              className='text-center mt-10'>
                <h1 className='text-3xl'>Other Services We Make</h1>
                <h2 className='text-2xl'>Repaire All Electronic</h2>
                <h3 className='text-2xl'>Device</h3>
              </motion.div>

              <motion.div 
                  initial={{opacity:0, y:80}}
                  whileInView={{opacity:1, y:0}}
                  transition={{duration:0.8}}
                  viewport={{once:true}}
            
              className='flex flex-row justify-evenly items-center pt-20'>
                <motion.div>

                  <img src={repair} alt="" className='w-40 h-40 rounded-3xl shadow-md shadow-blue-600' />
                  <p className='text-center text-xl pt-1'>Repaire Buttons</p>
                  <Link to='https://wa.me/250791602044' target='_blank'><button className='mx-6 border px-2 py-1 outline-none mt-3  bg-blue-600 hover:bg-blue-500 text-white 
                      cursor-pointer rounded-xl  '>More Details</button></Link>
                </motion.div>
                <motion.div>

                  <img src={repa} alt=""  className='w-40 h-40 rounded-3xl shadow-md shadow-blue-600'/>
                  <p className='text-center text-xl pt-1'>Repaire Battery</p>
                  <Link to='https://wa.me/250791602044' target='_blank'><button className='mx-6 border px-2 py-1 outline-none mt-3  bg-blue-600 hover:bg-blue-500 text-white 
                      cursor-pointer rounded-xl  '>More Details</button></Link>
                </motion.div>
                <motion.div>
                  

                  <img src={repai} alt="" className='w-40 h-40 rounded-3xl pt-1 shadow-md shadow-blue-600' />
                  <p className='text-center text-xl'>Repaire Camera</p>
                  <Link to='https://wa.me/250791602044' target='_blank'><button className='mx-6 border px-2 py-1 outline-none mt-3  bg-blue-600 hover:bg-blue-500 text-white 
                      cursor-pointer rounded-xl  '>More Details</button></Link>
                </motion.div>
                <motion.div>

                  <img src={rep} alt=""  className='w-40 h-40 rounded-3xl pt-1 shadow-md shadow-blue-600 '/>
                  <p className='text-center text-xl'>Repaire Screen</p>
                  <Link to='https://wa.me/250791602044' target='_blank'><button className='mx-6 border px-2 py-1 outline-none mt-3  bg-blue-600 hover:bg-blue-500 text-white 
                      cursor-pointer rounded-xl  '>More Details</button></Link>
                </motion.div>
              </motion.div>
            
            {/* end repair home */}
            </motion.div>

    </div>
  )
}

export default Home

// import {categories} from "../data/categories" 
// import CategoryCard from "../Navbarcomponent/CategoryCard"
// function Home(){ 
// return( 
// <div>  
// <h2 className="text-center text-2xl mt-10 text-blue-600"> 
// Categories 
// </h2> 
// <div className="grid md:grid-cols-3 gap-8 px-10 mt-10"> 
// {categories.map((cat)=>( 
// <CategoryCard key={cat.id} category={cat}/> 
// ))} 
// </div> 
// </div> 
// ) 
// } 
// export default Home 