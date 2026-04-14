import {useParams} from "react-router-dom" 
import {products} from "../data/products" 
import ProductCard from "../Navbarcomponent/ProductCard"
import { motion } from "framer-motion"
function CategoryPage(){ 
const {name} = useParams() 
const filtered = products.filter( 
(p)=>p.category === name 
) 
return( 
<motion.div 
initial={{opacity:0 , scale:0.7}}
animate={{opacity:1, scale:1}}
transition={{duration:0.5}}
className=" mt-20"> 
<h1 className="text-3xl text-center font-bold text-blue-600"> 
{name} 
</h1> 
<div className="grid grid-cols-2 max-w-6xl mx-auto sm:grid-cols-3   p-5"> 
{filtered.map((product)=>( 
<ProductCard key={product.id} product={product}/> 
))} 
</div> 
</motion.div> 
) 
} 
export default CategoryPage 