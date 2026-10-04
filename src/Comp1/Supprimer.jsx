import React, { useRef, useState } from 'react'

function Supprimer() {
  const ref1=useRef()
  const [erreur,setErreur]=useState(false)


  const Supprimer1=()=>{
     setErreur(false)
     if(!ref1.current.value) return 

     fetch("http://localhost:4000/supprimer/"+ref1.current.value,{method:"DELETE"})
     .then((res)=>{console.log(res);return res.text()})
     .then((res)=>{console.log(res)})
     .catch((err)=>{console.log(err);setErreur(true)})
  }


  return (
    <div className="border-black border-[1px] w-[400px] h-[400px] flex flex-wrap justify-center items-center gap-4 flex-col">
        <span className='font-bold text-[30px]'>
           {
              erreur==true?"erreur veuillez ressayer":""
           }
        </span>
        <div className='w-full flex justify-center'>
            <input ref={ref1} type="number" className='border-black border-[1px] rounded-[10px] w-[50px] h-[50px]' />
        </div>
        <button onClick={Supprimer1} className='p-4 rounded-[10px] hover:bg-red-200 bg-red-500 text-white font-bold'>Supprimer</button>
    </div>
  )
}

export default Supprimer