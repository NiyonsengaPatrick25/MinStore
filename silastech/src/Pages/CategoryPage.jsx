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
className="px-10 mt-20"> 
<h1 className="text-3xl pl-35 font-bold text-blue-600"> 
{name} 
</h1> 
<div className="grid md:grid-cols-3 gap-8 mt-8"> 
{filtered.map((product)=>( 
<ProductCard key={product.id} product={product}/> 
))} 
</div> 
</motion.div> 
) 
} 
export default CategoryPage 