
import React from "react"; 
import { motion } from "framer-motion";

const Services = () => { 
const services = [ 
{ 
title: "Smart Devices", 
desc: "We create innovative smart electronics for home and office.", 
}, 
{ 
title: "Gadgets", 
      desc: "We design user-friendly gadgets that simplify life.", 
    }, 
    { 
      title: "Custom Electronics", 
      desc: "We develop custom electronics solutions for businesses.", 
    }, 
  ]; 
 
  return ( 
    <motion.div 
    initial={{opacity:0, y:-40}}
    animate={{opacity:1, y:0}}
    
    className=" bg-white px-6 py-12"> 
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10"> 
        Our Services 
      </h1> 
 
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"> 
        {services.map((service, index) => ( 
          <motion.div 
            key={index} 
            initial={{opacity:0, y:50}}
            animate={{opacity:1, y:0}}
            transition={{delay:index*0.3}}
            className="bg-gray-100 p-6 rounded-2xl shadow-blue-600 hover:shadow-lg 
transition" 
          > 
            <h2 className="text-xl font-semibold mb-3">{service.title}</h2> 
            <p className="text-gray-600">{service.desc}</p> 
          </motion.div> 
        ))} 
      </div> 
    </motion.div> 
  ); 
}; 
 
export default Services; 






// import { motion } from "framer-motion"; 
// const Services = () => { 
// return ( 
// <motion.div 
// className="min-h-screen bg-white px-6 py-12" 
// initial={{ opacity: 0, x: 100 }} 
// animate={{ opacity: 1, x: 0 }} 
// exit={{ opacity: 0, x: -100 }} 
// transition={{ duration: 0.5 }} 
// > 
// <h1 className="text-4xl text-center text-green-600 font-bold"> 
// Services 
// </h1> 
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, <br />
//   repellat, totam doloribus iure autem facere asperiores blanditiis <br />
//   veniam optio accusamus nesciunt aliquam officia aperiam voluptatem <br />
//   non velit. Natus, voluptatem temporibus.</p>
// </motion.div> 
// ); 
// }; 
// export default Services; 

// import { motion } from "framer-motion"; 
 
// const Services = () => { 
//   const services = [ 
//     { title: "Web Development", desc: "Modern responsive websites" }, 
//     { title: "UI/UX Design", desc: "Clean and user-friendly design" }, 
//     { title: "System Development", desc: "Custom systems for business" }, 
//   ]; 
 
//   return ( 
//     <div className="min-h-screen bg-white px-6 py-12"> 
//       <motion.h1 
//         className="text-4xl font-bold text-center text-green-600 mb-10" 
//         initial={{ opacity: 0, y: -40 }} 
//         animate={{ opacity: 1, y: 0 }} 
//       > 
//         Our Services 
//       </motion.h1> 
 
//       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"> 
//         {services.map((service, index) => ( 
//           <motion.div 
//             key={index} 
//             className="bg-gray-100 p-6 rounded-2xl shadow" 
//             initial={{ opacity: 0, y: 50 }} 
//             animate={{ opacity: 1, y: 0 }} 
//             transition={{ delay: index * 0.3 }} 
//           > 
//             <h2 className="text-xl font-semibold mb-3"> 
//               {service.title} 
//             </h2> 
//             <p className="text-gray-600">{service.desc}</p> 
//           </motion.div> 
//         ))} 
//       </div> 
//     </div> 
//   ); 
// }; 
 
// export default Services; 