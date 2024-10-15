import React from 'react'

import { motion } from 'framer-motion'
function Box2() {

  return (
    <div className='box-container'>
     <motion.div 
     className='box2'
     drag
     dragConstraints={
     {
        top: 10,
        bottom: 10,
        left: 10,
        right: 1000,
     } 
     }
     
     whileHover={{
        scale:1.2
     }}
     whileTap={{
        scale:0.9
     }}

     >
        
     
    </motion.div>
    </div>
    
  )
}

export default Box2

