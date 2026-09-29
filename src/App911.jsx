import React, { useRef, useState } from 'react'

function App911() {

  const [liste,setListe]=useState([{id:1},{id:2},{id:3}])
  const nombre1=useRef()
  const nombre2=useRef()
  const incr=useRef(0)


  const Ajouter=()=>{
    if(liste.length==9) return 
    setListe((prev)=>{
        return [...prev,{id:prev[prev.length-1].id+1}]
    })
  }

  const traiter=(nombre)=>{
        if(incr.current==0){
           nombre1.current=nombre
        }else {
           nombre2.current=nombre
        }

        incr.current++
  }

  const resultat=()=>{
    if(typeof nombre1.current=="number" && typeof nombre2.current=="number")
      document.getElementById("mee").innerText=nombre1.current+nombre2.current

    incr.current=0
  }


  return (
    <>
        <span id='mee' className='text-[40px] font-bold'>

        </span>
        <div onClick={Ajouter} className='class22 mt-5'>
            {
                liste.map((ele,key)=>{
                    return <div onClick={()=>{traiter(+ele.id)}} key={ele.id} className='bg-green-500 hover:bg-green-200 rounded-[10px] text-white flex justify-center items-center'>{ele.id}</div>
                })
            }
        </div>
        <span onClick={resultat} className='text-[30px] inline-block p-4 text-white bg-black rounded-[10px] hover:bg-[#4e4a4a8d]'>
            =
        </span>
    </>
  )
}

export default App911