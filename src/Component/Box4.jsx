import React from 'react'
import { motion, stagger } from 'framer-motion'

function Box4() {

    // const Boxvariants = {
    // lion:{
    //     x:100,
    //     scale:1.5,   
    //     backgroundColor: "orange", // Orange-red color for lion
    //     transition: {
    //         duration: 5,
    //     },
    // },
    // tiger:{
    //     x:100,
    //     scale:1.5,   
    //     backgroundColor: "yellow", // Orange-red color for tiger
    //     transition: {
    //         duration: 5,
    //     },
    // }
    // }
const boxVariant={
    hidden:{
        x:"-100vw",
  
    },
    visible:{
        x:0,
    
        transition:{
            delay:1,
// When we remove delay from children we use "when"
            when:"beforeChildren",
            staggerChildren:0.2,
        }
    }
}
const listVariant={
hidden:{
  x:-10,
  opacity:0
},
visible:{
  x:0,
  opacity:1, 

  // 0.2 is animation time 
  //To render each block individually we use 
  // Staggered children refers to animating multiple child elements in a sequence 
  // with a slight delay between each element's animation.
  transition:{
    // delay:2              
  }
}
}
    
  return (
    <div className='box-container'>
      <motion.div 
      className='box4'
    //   variants={Boxvariants}
    //   initial="lion"  // Initial state of the box is lion
    //   animate="tiger"

    variants={boxVariant}
    animate="visible"
    initial="hidden" //
      >


    {/* We are taking an array of numbers and map it through the array of numbers one by one and return list element */}
    
    {[1,2,3].map((box,index)=>{
        return<motion.li  
        key={index}
        className='boxItem'
        variants={listVariant}
        > </motion.li>})}
      </motion.div>
    </div>
  )
}

export default Box4
