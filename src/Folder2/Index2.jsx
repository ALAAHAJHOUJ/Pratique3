import React, { useRef, useState } from 'react'
import { CiDark,CiLight } from "react-icons/ci";



function Index2() {
  const [dark,setDark]=useState("light")
  const [liste,setListe]=useState([])
  const ref1=useRef()
  const ref2=useRef()

  const Envoyer=(e)=>{
    if(e.target!=ref1.current) return 
    fetch("http://localhost:4000/recuperer22/")
    .then((res)=>{console.log(res);return res.json()})
    .then((res)=>{console.log(res);setListe(res)})
    .catch((err)=>{console.log(err)})
  }

  const Switch=()=>{
     if(dark=="light"){
         document.getElementById("root").style.background="black"
         setDark("dark")
     }else {
         document.getElementById("root").style.background="white"
         setDark("light")
     }
  }


  const Supprimer=async(id)=>{
    try {
        const resultat=await fetch(`http://localhost:4000/supprimer/${id}`,{method:"DELETE"})

        const resultat1=await resultat.text()

        if(resultat1=="une erreur est servenue"){
             console.log(resultat1)
        }else{
             console.log(resultat1)
        }
    } catch (error) {
        console.log(error)
    }
  }


  const Ajouter=async()=>{
    if(ref2.current.value.trim()=="") return 

    try {
        const resultat1=await fetch("http://localhost:4000/Ajouter/",{method:"POST",headers:{'Content-Type': 'application/json'},body:JSON.stringify({valeur:ref2.current.value})})
    
        const resultat2=await resultat1.text()

        console.log(resultat2)
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <>
            <div onClick={Switch} className={`${dark=="light"?'border-black':'border-white'} border-[1px] w-[60px] h-[60px] rounded-[10px] flex justify-center items-center `}>
                {
                    dark=="light"?<CiDark size={40}></CiDark>:<CiLight className='text-white' size={40}></CiLight>
                }
            </div>
            <div ref={ref1} onClick={Envoyer} className={`flex justify-center items-center flex-wrap gap-5 rounded-[10px] w-[300px] min-h-[300px] p-4  border-[1px]  ${dark=='light'?'border-black text-black':'border-white text-white'}`}>
                {
                    liste.map((ele,key)=>{
                        return <div onClick={()=>{Supprimer(ele.id)}} key={ele.id} style={{boxShadow:`${dark=="light"?"rgba(0, 0, 0, 0.25)":"#f7f5f596"} 0px 3px 8px`}} className={`w-[80%] h-[70px] flex justify-center items-center rounded-[10px] uppercase  text-center ${dark=='dark'?' text-white':''}`}>{ele.name}</div>
                    })
                }
            </div>

            <input ref={ref2} type="text" placeholder='entrer le nom' className={'mt-4 w-[170px] h-[50px] border-[1px] rounded-[10px] box-border pl-4 '+`${dark=="light"?'border-black bg-white text-black':"border-white bg-black text-white"}`} />
            <button onClick={Ajouter} className='w-[120px] h-[50px] flex justify-center items-center text-white bg-blue-500 hover:bg-blue-200 rounded-[10px]'>Ajouter</button>   
    </>

  )
}

export default Index2