import React, { useState } from 'react'

function Comp1() {
  const [state1,setState1]=useState([])

  const Ajouter=()=>{
      setState1((prev)=>{
        if(prev.length==0) return [{id:1}]
        if(prev.length==20) return []
        return [...prev,{id:prev[prev.length-1].id+1}]
      })
  }


  return (
    <div onClick={Ajouter} className='border-black border-[1px] w-[400px] min-h-[400px] flex justify-center items-center gap-4 flex-wrap p-4'>
       {
          state1.map((ele,key)=>{
            return <div key={ele.id} className='bg-green-500 flex justify-center items-center text-white w-[70px] h-[70px] rounded-[10px]'>{ele.id}</div>
          })
       }
    </div>
  )
}

export default Comp1