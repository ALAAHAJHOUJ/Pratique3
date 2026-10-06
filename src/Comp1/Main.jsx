import React, { useState } from 'react'
import Ajouter from './Ajouter'
import Supprimer from './Supprimer'
import Reucperer from './Reucperer'

function Main() {
  const [state1,setState1]=useState("Ajouter")

  
  return (
       <>
         <button  onClick={()=>{setState1("Ajouter")}} className='bg-blue-500 font-bold hover:bg-blue-300 cursor-pointer text-white w-[120px] h-[50px] rounded-[10px] flex justify-center items-center'>Ajouter</button>
         <button onClick={()=>{setState1("Supprimer")}} className='bg-red-500 font-bold hover:bg-red-200 cursor-pointer text-white w-[120px] h-[50px] rounded-[10px] flex justify-center items-center'>Supprimer</button>
         <button onClick={()=>{setState1("recuperer")}} className='bg-green-400 font-bold hover:bg-green-200 cursor-pointer text-white w-[120px] h-[50px] rounded-[10px] flex justify-center items-center'>Liste</button>
         {
            state1=="Ajouter"?<Ajouter></Ajouter>:
            state1=="Supprimer"?<Supprimer></Supprimer>:
                                <Reucperer></Reucperer>
         }
       
       </>
  )
}

export default Main