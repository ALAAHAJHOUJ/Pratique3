import React, { useEffect, useState } from 'react'

function Reucperer() {
  const [liste,setListe]=useState([])
  const [erreur,setErreur]=useState(false)


  const recuperer=()=>{

    fetch("http://localhost:4000/Recuperer/")

    .then((res)=>{

        if(res.headers.get("content-type")?.includes("application/json")){
              return res.json()  
        }else{
              return res.text()
        }       
    })

    .then((res)=>{
        if(res=="une erreur est servenue")
            throw new Error("une erreur est servenue")
        else {
            setListe(res)
        }
            
    })

    .catch((err)=>{
        console.log(err)
        setErreur(true)
    })
  }



  useEffect(()=>{
    recuperer()
  },[])


  return (
    <div onClick={recuperer} className="border-black border-[1px] p-6 box-border w-[400px] min-h-[400px] flex flex-wrap justify-center items-center gap-5 flex-col">
      <span className='font-bold text-[30px]'>
       {
           erreur==true?"une erreur est servenue":""
       }
      </span>
      {
        typeof liste=="string"?<span className='text-[30px] font-bold'>{liste}</span>:
        liste.map((ele,key)=>{
            return <div style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}} className=' rounded-[10px] p-5 w-[80%] h-[50px] flex justify-center items-center' key={ele.id}>{`Exemple-${ele.id}:${ele.propr1}_${ele.propr2}`}</div>
        })
      }
    </div>
  )
}

export default Reucperer