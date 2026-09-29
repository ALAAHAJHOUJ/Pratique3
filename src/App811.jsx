import { motion } from 'framer-motion'

import { useEffect, useState } from 'react'


function App811() {
  const [liste,setListe]=useState([{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8}])

  return (
      <div className='border-black border-[1px] w-[400px] h-[400px] p-5 flex flex-wrap justify-center items-center gap-3'>
          {
            liste.map((ele,key)=>{
               return <motion.div initial={{opacity:0,y:"30px"}} animate={{opacity:1,y:0}} transition={{duration:1,delay:ele.id*0.1}} key={ele.id} style={{width:"50px",height:"80px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",display:"flex",justifyContent:"center",alignItems:"center"}}>{ele.id}</motion.div>
            })
          }
      </div>
  )
}

export default App811