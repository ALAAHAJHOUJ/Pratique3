import React, { useEffect, useRef, useState } from 'react'
import { CiDark, CiLight } from "react-icons/ci";



function Test() {
  const [suggestion,setSuggestions]=useState([])
  const suggestionAux=useRef([])
  const ref1=useRef()
  const [selected,setSelected]=useState("")
  const [montrer,setMontrer]=useState(false)
  const valeur=useRef(0)
  const [selectedElement,setSelectedElement]=useState(null)
  const montrerAux=useRef(false)
  const selectedAux=useRef(null)
  const [Dark,setDark]=useState(false)

  const chercher=(e)=>{
     if(!e.target.value) { setSuggestions([]);suggestionAux.current=[];setMontrer(false);montrerAux.current=false;return }



     fetch("http://localhost:4000/suggestions/"+e.target.value)
     .then((res)=>{return res.json()})
     .then((res)=>{setSuggestions(res);setMontrer(true);montrerAux.current=true;suggestionAux.current=res})
     .catch((err)=>{console.log(err)})
  }


  useEffect(()=>{
    window.addEventListener("click",(e)=>{
        if(e.target==document.getElementById("root")||e.target==document.getElementById("me"))
               setMontrer(false)
               montrerAux.current=false
               selectedAux.current=null
               setSelectedElement(null)
       })


  },[])





  useEffect(()=>{
            window.addEventListener("keydown",(e)=>{
                if(e.key=="ArrowDown"||e.key=="ArrowUp"){
                    changer(e.key)
                }
            })
  },[])




  const Ajouter=async()=>{
    
        try {
             const resultat1=await fetch("http://localhost:4000/Ajouter1/",{headers:{'Content-Type': 'application/json'},method:"POST",body:JSON.stringify({valeur:"valeur:"+valeur.current})})
         
             const resultat2=await resultat1.text()

             console.log(resultat2)

             if(resultat2=="opération passée avec succes"){
                 valeur.current++
             }
            
        
        } catch (error) {
            console.log("une erreur est servenue  11")
        }  
  }




  const changer=(key11)=>{
        if(montrerAux.current==false) return 

        console.log("entrer")

        if(selectedAux.current==null){
            {
                setSelectedElement(0)
                selectedAux.current=0
            }
        }else {
            if(key11=="ArrowDown"){
                console.log(selectedAux.current)
                if(selectedAux.current==suggestionAux.current.length-1)
                  {
                    setSelectedElement(0)
                    selectedAux.current=0
                  }
                else 
                  {
                    setSelectedElement(selectedAux.current+1)
                    selectedAux.current=selectedAux.current+1
                  }
            }
            else 
            {
                if(selectedAux.current==0)
                  {
                    setSelectedElement(suggestionAux.current.length-1)
                    selectedAux.current=suggestionAux.current.length-1
                  }

                else 
                  {
                  
                    setSelectedElement(selectedAux.current-1) 
                    selectedAux.current=selectedAux.current-1
                  }

            }
        }
  }



  const changer1=()=>{

     setDark((prev)=>{
          if(prev==true){
             document.body.style.background="white"
             return false
          }else {
             document.body.style.background="black"
             return true
          }
     })
  }



  return (
    <>
            <div onClick={changer1} className=' flex justify-center items-center w-[100px] h-[100px]'>
              {
                Dark==false?<CiDark size={40} className=''></CiDark>:<CiLight size={40} className='text-white'></CiLight>
              }
            </div>
            <span onClick={Ajouter} id='me11' className={'font-bold text-[30px] '+`${Dark==false?'text-black':'text-white'}`}>
                {
                    selected
                }
            </span>
            <div  id='me'  className={'border-[1px] w-[300px] h-[300px] flex justify-center items-center '+`${Dark==false?'border-black':'border-white'}`}>
                <div  className='relative w-[80%] h-[50px]'>
                    <input autoComplete='off' onChange={(e)=>{chercher(e)}} type="text" id='mee' className={'border-[1px] pl-5 box-border rounded-[10px] w-full h-full absolute top-0 right-0 '+`${Dark==false?'border-black':'border-white bg-black text-white'}`} />
                    {
                        montrer==false?<></>:suggestion.length==0?<div className='absolute cursor-default flex justify-center items-center text-[#afafaf] w-full border  mt-3 pb-5 top-[50px] min-h-[60px]'>Aucune Suggestion</div>:suggestion.length?<div className="absolute w-full  mt-3 pb-5 top-[50px] min-h-[60px]">
                            <div ref={ref1}  className={' w-full box-border p-4  min-h-[60px] flex justify-center flex-wrap items-center border-[1px] '+`${Dark==false?'border bg-white text-black':'border-white bg-black text-white'}`}>
                                {
                                    suggestion.map((ele,key)=>{
                                        return <div key={key} onMouseEnter={()=>{setSelectedElement(key);selectedAux.current=key}} onClick={()=>{setSelected(ele.nom)}} className={'h-[60px] w-full flex justify-center items-center cursor-default '+`${key==selectedElement?'bg-[#dddcdc53]':''}`}>{ele.nom}</div>
                                    })
                                }
                            </div>
                        </div>:<></>
                    }   
                </div>

            </div>
    </>

  )
}

export default Test