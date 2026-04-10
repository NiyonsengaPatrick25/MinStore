import { Link } from "react-router-dom"
import {motion} from 'framer-motion'

function ProductCard({product}){ 
return( 
<motion.div 
className=""> 
<img 
src={product.image} 
 className='w-40 h-40 mx-auto rounded-full cursor-pointer shadow-md shadow-blue-600 hover:scale-95 linear duration-75 transition-all'
/> 
<div className="mx-36">
{/* <h2 className="mt-3 font-bold"> 
{product.name} 
</h2>  */}
<p className="text-gray-500"> 
{product.price} 
</p> 
<Link to='https://wa.me/250791602044' target='_blank'><button className=' border px-2 py-1 outline-none mt-3  bg-blue-600 hover:bg-blue-500 text-white 
          cursor-pointer rounded-xl  '>More Details</button></Link>
  </div>
</motion.div> 
) 
} 
export default ProductCard 