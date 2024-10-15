import React from 'react'
import { motion } from 'framer-motion'

function Box5() {
  return (
    <div className='box-container'>
      <motion.div 
      className='box5'
      animate={{
        scale:[1,1.4,1.4,1,1],
        borderRadius:["20%","20%","50%","50%","20%"],
        rotate:[0,0,270,270,0]
      }}
      transition={{
        //Total duration required to animate and change scale
        duration:4
      }}
      >

      </motion.div>
    </div>
  )
}

export default Box5
