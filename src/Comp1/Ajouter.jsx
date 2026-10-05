import { select } from 'framer-motion/client'
import React, { useEffect, useRef, useState } from 'react'

function Ajouter() {
  const ref1=useRef()
  const ref2=useRef()
  const [erreur,setErreur]=useState(false)
  const handle=useRef(false)
  const SelectedElement=useRef()

  const Envoyer=()=>{
        setErreur(false)
        if(ref1.current.value.trim()==""||ref1.current.value.trim()=="") return 

        fetch("http://localhost:4000/Ajouter/",{method:"POST",headers:{'Content-Type': 'application/json'},body:JSON.stringify({propr1:ref1.current.value,propr2:ref2.current.value})})
        .then((res)=>{console.log(res);return res.text()})
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.log(err);setErreur(true)})
 
  }

  const HandleFocus=()=>{
      if(handle.current==false) return 
      
      if(SelectedElement.current==ref1.current)
      {
          SelectedElement.current=ref2.current;
          ref2.current.focus()
      }else {
          SelectedElement.current=ref1.current;
          ref1.current.focus()
      }

  }


  useEffect(()=>{
    const Handle1=(e)=>{
        console.log("tester")
        if(e.key=="ArrowDown"||e.key=="ArrowUp")
          HandleFocus()
    }

    window.addEventListener("keydown",Handle1)

    return ()=>{
      window.removeEventListener("keydown",Handle1)
    }

    
  },[])


  return (
    <div className="border-black border-[1px] w-[400px] h-[400px] flex flex-wrap justify-center items-center gap-4 flex-col">
        <span  className='font-black text-[30px]'>
          {
            erreur==true?"erreur,veuillez ressayer":""
          }
        </span>
        
        <input onFocus={()=>{handle.current=true;SelectedElement.current=ref1.current}} onBlur={()=>{handle.current=false}} ref={ref1}  type="text" placeholder='entrer la premiere propr' className='border-black border-[1px] w-[70%] h-[40px] pl-4 box-border rounded-[10px]' />
        <input onFocus={()=>{handle.current=true;SelectedElement.current=ref2.current}} onBlur={()=>{handle.current=false}}  ref={ref2} type="text" placeholder='entrer la deuxieme propr' className='border-black border-[1px] w-[70%] h-[40px] pl-4 box-border rounded-[10px]' />
        <button onClick={Envoyer} className='bg-blue-500 text-white rounded-[10px] p-5 font-bold hover:bg-blue-300 '>Envoi</button>
    </div>
  )
}

export default Ajouter