import React, { useState } from 'react'
import { motion } from 'framer-motion'



function App871() {
  const [liste,setListe]=useState([])
  const [erreur,setErreur]=useState(false) 


  const Recuperer=async(req,res)=>{
     try {
            const resultat1=await  fetch("http://localhost:4000/Recuperer/")

            const Headers=resultat1.headers.get("content-type");

            if (Headers?.includes("application/json")) {
              const data = await resultat1.json();
              console.log(data)
              if(data.length){
                setListe(data)
              }else {
                setListe("la liste est vide")
              }
            } else {
              setErreur(true)
            }



     } catch (error) {

        console.log(error)
        setErreur(true)

     }
  }


  return (
    <>

        <div onClick={Recuperer} className='border-black border-[1px] w-[400px] h-[400px] p-4 flex flex-wrap gap-4 justify-center items-center'>
            {
                typeof liste=="string"?"le liste est vide":
                liste.map((ele,key)=>{
                    return <motion.div initial={{opacity:0,y:"-30px"}} whileHover={{transform:"rotate(300deg)"}} animate={{opacity:1,y:0}} transition={{duration:0.4,delay:0.1*key}} key={ele.id} style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}} className='p-4 rounded-[10px] bg-green-400 text-white  class5'>{ele.id}</motion.div>
                })
            }
        </div>

    </>

  )
}

export default App871