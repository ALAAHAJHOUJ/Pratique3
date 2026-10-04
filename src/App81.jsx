import React, { useEffect, useRef, useState } from 'react'

function App81() {
  const [liste,setListe]=useState([])
  const [state,setState]=useState(null)
  const Supprimer=useRef(false)




  const Ajouter=()=>{
     Supprimer.current=false
     setListe((prev)=>{
        if(prev.length==0) return [{id:1}]
        else return [...prev,{id:prev[prev.length-1].id+1}]
     })

     setState(null)
  }



  const Annuler=(e)=>{
    e.preventDefault()
  }




  const Supprimer1=()=>{
    if(Supprimer.current==false) return 
    setListe((prev)=>{
        let tableau=[...prev]
        tableau=Supprimer2(tableau,state)

        return tableau
    })
  }

  const Supprimer2=(tableau,key)=>{
     const Aux=[...tableau]
     for(let i=key;i<Aux.length-1;i++){
        Aux[i]=Aux[i+1]
     }

     Aux.pop()
     return Aux
  }



  return (
       <div   onDragOver={Annuler} className='w-full h-full flex justify-center items-center gap-9 flex-col'>
         <div draggable={true} className='border-black border-[1px] w-[80px] h-[80px] rounded-[10px] bg-green-400'>

         </div>

         <div  onDragOver={Annuler} onDrop={Ajouter} className='border-[1px] border-black flex flex-wrap justify-center items-center gap-5 w-[400px] h-[400px]'>
            {
                liste.map((ele,key)=>{
                    return <div key={ele.id} draggable onDragStart={()=>{setState(key);Supprimer.current=true}} onDragEnd={()=>{if(Supprimer.current) Supprimer1()}}  className='border-black border-[1px] w-[80px] h-[80px] text-white flex justify-center items-center rounded-[10px] bg-green-400'>{ele.id}</div>
                })
            }
         </div>
       </div>
  )
}

export default App81