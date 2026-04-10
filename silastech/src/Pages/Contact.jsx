
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const phone = "250791602044"; // replace with your number
  const email = "silastech@gmail.com";
  const instagram = "https://instagram.com/silastech";

  return (
    <motion.div 
    initial={{opacity:0, y:-40}}
    animate={{opacity:1, y:0}}
    className=" px-6 py-12 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Contact Us
      </h1>

      <p className="text-gray-700 mb-10">
        Reach out to us through any of the platforms below
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        
        {/* WhatsApp */}
        <motion.a
        initial={{opacity:0 , y:50}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.3}}

          href={`https://wa.me/${phone}`}
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 text-white px-6 py-3 rounded-xl shadow hover:bg-green-600 transition"
        >
          Chat on WhatsApp
        </motion.a>

        {/* Email */}
        <motion.a
        initial={{opacity:0 , y:50}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.6}}

          href={`mailto:${email}`}
          className="bg-blue-500 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-600 transition"
        >
          Send Email
        </motion.a>
        

        {/* Instagram */}
        <motion.a
        initial={{opacity:0 , y:50}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.8}}

          href={instagram}
          target="_blank"
          rel="noreferrer"
          className="bg-pink-500 text-white px-6 py-3 rounded-xl shadow hover:bg-pink-600 transition"
        >
          Visit Instagram
        </motion.a>

      </div>
    </motion.div>
  );
};

export default Contact;


// import { motion } from "framer-motion"; 
// const Contact = () => { 
// return ( 
// <motion.div 
// className="min-h-screen bg-gray-50 px-6 py-12 text-center" 
// initial={{ opacity: 0, x: 100 }} 
// animate={{ opacity: 1, x: 0 }} 
// exit={{ opacity: 0, x: -100 }} 
// transition={{ duration: 0.5 }} 
// > 
// <h1 className="text-4xl font-bold text-blue-600"> 
// Contact Us 
// </h1> 
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, <br />
//   repellat, totam doloribus iure autem facere asperiores blanditiis <br />
//   veniam optio accusamus nesciunt aliquam officia aperiam voluptatem <br />
//   non velit. Natus, voluptatem temporibus.</p>
// </motion.div> 
// ); 
// }; 
// export default Contact; 


// import { motion } from "framer-motion"; 
 
// const Contact = () => { 
//   const phone = "2507XXXXXXXX"; 
//   const email = "silastech@gmail.com"; 
//   const instagram = "https://instagram.com/silastech"; 
 
//   return ( 
//     <motion.div 
//       className="min-h-screen bg-gray-50 px-6 py-12 text-center" 
//       initial={{ opacity: 0 }} 
//       animate={{ opacity: 1 }} 
//     > 
//       <motion.h1 
//         className="text-4xl font-bold text-blue-600 mb-6" 
//         initial={{ y: -40 }} 
//         animate={{ y: 0 }} 
//       > 
//         Contact Us 
//       </motion.h1> 
 
//       <motion.div className="flex flex-col md:flex-row justify-center gap-6 mt-10"> 
 
//         {/* WhatsApp */} 
//         <motion.a 
//           href={`https://wa.me/${phone}`} 
//           target="_blank" 
//           whileHover={{ scale: 1.1 }} 
//           className="bg-green-500 text-white px-6 py-3 rounded-xl" 
//         > 
//           WhatsApp 
//         </motion.a> 
 
//         {/* Email */} 
//         <motion.a 
//           href={`mailto:${email}`} 
//           whileHover={{ scale: 1.1 }} 
//           className="bg-blue-500 text-white px-6 py-3 rounded-xl" 
//         > 
//           Email 
//         </motion.a> 
 
//         {/* Instagram */} 
//         <motion.a 
//           href={instagram} 
//           target="_blank" 
//           whileHover={{ scale: 1.1 }} 
//           className="bg-pink-500 text-white px-6 py-3 rounded-xl" 
//         > 
//           Instagram 
//         </motion.a> 
 
//       </motion.div> 
//     </motion.div> 
//   ); 
// }; 
 
// export default Contact; 