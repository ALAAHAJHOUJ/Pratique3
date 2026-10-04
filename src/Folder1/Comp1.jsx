import React, { useEffect, useRef, useState } from 'react'

function Comp1() {
  const [state1,setState1]=useState([])
  const ref1=useRef()


  const Ajouter=(e)=>{
    if(e.target!=ref1.current) return 


    setState1((prev)=>{
        if(prev.length==0 || prev.length==15) return [{id:1}]
        else return [...prev,{id:prev[prev.length-1].id+1}]
    })
  }


  const Supprimer=()=>{
      
    setState1((prev)=>{
       const tableau=[...prev]
       tableau.pop()


       return tableau
    })
  }

  return (
    <div ref={ref1} onClick={Ajouter} className="border-black border-[1px] p-5 w-[300px] min-h-[300px] flex justify-center items-center flex-wrap gap-6">
       {
        state1.map((ele,key)=>{
            return <div onClick={Supprimer} key={ele.id} className='bg-green-400 cursor-pointer rounded-[10px] hover:bg-green-200 text-white w-[70px] h-[70px] flex justify-center items-center'>{ele.id}</div>
        })
       }
    </div>
  )
}

export default Comp1