import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import MonComponent from './Index1'



function Index() {
  const [state1,setState1]=useState(0)



  return (
    <>
        
        <MonComponent name={`nom:${state1}`}></MonComponent>
        <div className='border-black border-[1px] w-[300px] h-[300px] flex justify-center items-center ' onClick={()=>{setState1(state1+1)}}>
            nombre:{`${state1}`}
        </div>
    </>

  )
}

export default Index