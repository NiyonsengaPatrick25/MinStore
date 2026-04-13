import React, { useState } from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Mainnavbar = () => {


  const [category, setCategory] = useState("")
  const navigate = useNavigate()
  const handleSearch = () =>{
    if(category){
    navigate(`/category/${category}`)
    }
    }
  return (
    <div className=''>
      <div className='justify-between flex flex-col  lg:flex-row md:flex-row items-center  p-5  '>
        <div>
        <h1 className='pl-10 text-3xl text-gray-500 font-bold'><span className='text-blue-600'>Silas</span> Tech</h1>
        </div>
        <div className='flex '>
        <select name="" id="" className=' border rounded-full px-4
        border-gray-600 outline-none text-gray-400 '
        onChange={(e)=> setCategory(e.target.value)}>
          <option >Select Category</option>
          <option value="Phone">Phones</option>
          <option value="SmartWatch">Smart watch</option>
          <option value="Watches">Watches</option>
          <option value="Accessories">Accessories</option>
          <option value="HeadPhones">HeadPhones</option>
          <option value="Bluetooth Speaker">Bluetooth Speaker</option>
        </select>
        
        {/* <input type="search" placeholder='Search here...' className='border px-2 py-1 rounded-none
         border-gray-400 border-r-white focus:shadow-md shadow-blue-600 outline-none'/> */}
        <button onClick={handleSearch} type='submit' className=' border  px-4 py-2 rounded-full 
           cursor-pointer bg-gray-500  ease-in-out duration-100  text-white hover:bg-gray-400 hover:text-dark'>Search</button>
          </div>
        <div className=''>
        <p className='pr-10 text-shadow-lg text-lg'>📧silastech@gmail.com</p>
      </div>
      {/* <div className=''>
          <FaEnvelope />
        </div> */}
      </div>
        {/* <div className="mt-4"> 
{resulte.map((item)=>( 
<p key={item.id}>{item.name}</p> 
))} 
</div>  */}

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
{resulte.length > 0 ? ( 
resulte.map((product) => ( 
<div 
key={product.id} 
className="bg-white p-4 rounded shadow" 
> 
<h2 className="text-lg font-semibold"> 
{product.name} 
</h2> 
<p>{product.price}</p> 
<span className="text-sm text-gray-500"> 
{product.category} 
</span> 
</div> 
)) 
) : ( 
<p className="text-red-500">No products found</p> 
)} 
</div>  */}

       
    </div>
  )
}

export default Mainnavbar
