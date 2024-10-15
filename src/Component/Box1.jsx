import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
function Box1() {
  const [Isanimate,setAnimate]=useState(false)
  return (
    <div className='box-container'>
     <motion.div 
     className='box'
     animate={{
        x:Isanimate?750:0,
        opacity:Isanimate?1:0.5,
        backgroundColor:Isanimate?'blue':'red',
        // scale:1.5
        rotate:Isanimate?360:0
     }}
     initial={{
      opacity: 0.1,
      backgroundColor:'yellow'
    }}
     transition={{
        type:"spring",
        // duration: 3 ,
        // ease: 'easeInOut'
        stiffness:1000,
        damping:10
     }}
     onClick={()=>setAnimate(!Isanimate)}
     >
    </motion.div>
    </div>
    
  )
}

export default Box1

