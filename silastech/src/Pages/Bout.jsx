
import React from "react"; 
import { motion } from "framer-motion";

const Bout = () => { 
return ( 
<motion.div 
initial={{opacity:0, y:-40}}
animate={{opacity:1 , y:0}}

// exit={{opacity:0, x:-100}}
className="  px-6 py-12 flex flex-col justifycenter"
> 
<div className="max-w-4xl mx-auto text-center"> 
<motion.h1 
className="text-4xl font-bold text-blue-600 mb-6"> 
About Silas Tech 
</motion.h1> 
<motion.p 
 initial={{opacity:0 , y:50}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.3}}
className="text-gray-700 text-lg mb-4"> 
Silas Tech is an electronics devices company dedicated to creating 
innovative, high-quality products for everyday life. We specialize 
in 
smart devices, gadgets, and electronics solutions that make life 
easier. 
</motion.p> 
<motion.p 
 initial={{opacity:0 , y:50}}
  animate={{opacity:1, y:0}}
    transition={{delay:0.5}}
className="text-gray-600"> 
Our mission is to combine technology and design to deliver 
reliable, 
cutting-edge electronics for homes and businesses. 
</motion.p> 
</div> 
</motion.div> 
); 
}; 
export default Bout; 


// import { motion } from "framer-motion"; 
// const Bout = () => { 
// return ( 
// <motion.div 
// className="min-h-screen bg-gray-50 px-6 py-12" 
// initial={{ opacity: 0, x: 100 }} 
// animate={{ opacity: 1, x: 0 }} 
// exit={{ opacity: 0, x: -100 }} 
// transition={{ duration: 0.5 }} 
// > 
// <h1 className="text-4xl font-bold text-center text-blue-600"> 
// About Silas Tech 
// </h1> 
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, <br />
//   repellat, totam doloribus iure autem facere asperiores blanditiis <br />
//   veniam optio accusamus nesciunt aliquam officia aperiam voluptatem <br />
//   non velit. Natus, voluptatem temporibus.</p>
// </motion.div> 
// ); 
// }; 
// export default Bout; 


// import React from "react"; 
// import { motion } from "framer-motion"; 
// const Bout = () => { 
// return ( 
// <motion.div 
// className="min-h-screen bg-gray-50 px-6 py-12" 
// initial={{ opacity: 0 }} 
// animate={{ opacity: 1 }} 
// transition={{ duration: 1 }} 
// > 
// <div className="max-w-4xl mx-auto text-center"> 
// <motion.h1 
// className="text-4xl font-bold text-blue-600 mb-6" 
// initial={{ y: -30, opacity: 0 }} 
// animate={{ y: 0, opacity: 1 }} 
// transition={{ duration: 0.8 }} 
// > 
// About Silas Tech 
// </motion.h1> 
// <motion.p 
// className="text-gray-700 text-lg" 
// initial={{y: -30, opacity: 0 }} 
// animate={{y: 0, opacity: 1 }} 
// transition={{ delay: 0.5 }} 
// > 
// Silas Tech builds modern digital solutions using the latest 
// technologies like React and Tailwind CSS. <br />


// </motion.p> 
// </div> 
// </motion.div> 
// ); 
// }; 
// export default Bout; 