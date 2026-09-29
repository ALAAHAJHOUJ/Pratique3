import { motion } from 'framer-motion'

import { useEffect, useRef, useState } from 'react'


  function App811() {
    const [liste,setListe]=useState([{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8}])
    const autoriser=useRef(false)


    const changer=async()=>{
        if(autoriser.current==false) return 

        autoriser.current=false
        const taille=document.getElementsByClassName("class2").length;
        const element=document.getElementsByClassName("class2")

        for(let i=0;i<taille;i++){
           await new Promise((res,rej)=>{
            setTimeout(() => {
              res("hey I'm resolved")
            }, 300);
           })

           element[i].style.transition="1000ms all"
           element[i].style.background="green";
           element[i].style.color="white"

        }
    }


    useEffect(()=>{
      setTimeout(() => {
        autoriser.current=true
      }, 4000);
    })


    return (
        <div onClick={changer} className='border-black border-[1px] w-[400px] h-[400px] p-5 flex flex-wrap justify-center items-center gap-3'>
            {
              liste.map((ele,key)=>{
                const width1=ele.id%2==0?"80px":"50px" 
                return <motion.div className='class2' initial={{opacity:0,y:"30px"}} viewport={{once:true}} whileInView={{opacity:1,y:0}} transition={{duration:0.5,delay:ele.id*0.1}} key={ele.id} style={{width:`${width1}`,height:"80px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"10px"}}>{ele.id}</motion.div>
              })
            }
        </div>
    )
  }

  export default App811