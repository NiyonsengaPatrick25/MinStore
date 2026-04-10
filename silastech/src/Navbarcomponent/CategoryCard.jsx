import {useNavigate} from "react-router-dom" 
function CategoryCard({category}){ 
const navigate = useNavigate() 
return( 
<div 
onClick={()=>navigate(`/category/${category.name}`)} 
className="shadow-lg p-6 rounded cursor-pointer hover:scale-105 transition" 
> 
<img 
src={category.image} 
className="w-32 mx-auto" 
/> 
<h3 className="text-center mt-4"> 
{category.name} 
</h3> 
</div> 
) 
} 
export default CategoryCard 