import React, { useState } from 'react'
import { motion } from 'framer-motion'


function Box3() {
    const [og,setOg]=useState(false);

    const boxVariant={
        size:{
            x: og ? 750 : -100,
            scale: og ? 1.5 : 0.5,
            backgroundColor: og ? "yellow" : "blue",
            transition: {
                duration: og ? 5 : 2
            }
        },
        size1: {
            x: 100,
            scale: 0.5,
            backgroundColor: "blue",
            transition: {
                duration: 2
            }
        }

    }
  return (
    <div className='box-container'>
    <motion.div
      className='box3'
      variants={boxVariant}
      initial="size"
      animate={og ? "size" : "size1"}
      onClick={() => setOg(!og)}
    >
      
    </motion.div>
        </div>
  )
}

export default Box3
