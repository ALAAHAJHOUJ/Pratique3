import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'


function Index() {
  const [state1,setState1]=useState(0)



  return (
    <>
        {
            state1%2==1?  <motion.div initial={{scaleX:1}} animate={{scaleX:[1,0.4,1]}} transition={{duration:1}} className='border-black bg-black rounded-[10px] border-[1px] w-[100px] h-[4px]'>

                        </motion.div>:<></>
        }

        <div className='border-black border-[1px] w-[300px] h-[300px] flex justify-center items-center ' onClick={()=>{setState1(state1+1)}}>
            nombre:{`${state1}`}
        </div>
    </>

  )
}

export default Index