import React, { useState } from 'react'

function App199() {
  const [liste,setListe]=useState([{id:1}])
  

  const Animer=async()=>{
     const taille=document.getElementsByClassName("mee").length;
     const element=document.getElementsByClassName("mee")
     

     for(let i=0;i<taille;i++){
            const promise1=new Promise((res,rej)=>{
                setTimeout(() => {
                    res("hey I'm resolved")
                }, 500);
            })

            await promise1

            element[i].style.background="black";
            element[i].style.color="white"
     }
  }


  const Ajouter=()=>{
    if(liste.length==10) return Animer()
    setListe((prev)=>{
        return [...prev,{id:prev[prev.length-1].id+1}]
    })
  }


  return (
    <div onClick={Ajouter} className='border-black border-[1px] p-5 w-[300px] min-h-[300px] flex-wrap flex gap-3 justify-center content-start'>
       {
        liste.map((ele,key)=>{
            return <div key={ele.id} className='bg-green-400 mee  hover:text-green-300 transition-all duration-200 text-white w-[45%] aspect-square flex justify-center items-center rounded-[10px]'>{ele.id}</div>
        })
       }   
    </div>
  )
}

export default App199