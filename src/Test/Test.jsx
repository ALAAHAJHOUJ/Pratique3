import React, { useEffect, useRef, useState } from 'react'

function Test() {
  const [suggestion,setSuggestions]=useState([])
  const ref1=useRef()
  const [selected,setSelected]=useState("")
  const [montrer,setMontrer]=useState(false)


  const chercher=(e)=>{
     if(!e.target.value) { setSuggestions([]);setMontrer(false);return }



     fetch("http://localhost:4000/suggestions/"+e.target.value)
     .then((res)=>{return res.json()})
     .then((res)=>{setSuggestions(res);setMontrer(true)})
     .catch((err)=>{console.log(err)})
  }


  useEffect(()=>{
    window.addEventListener("click",(e)=>{
        if(e.target==document.getElementById("root")||e.target==document.getElementById("me"))
               setMontrer(false)
       })
  },[])


  return (
    <>
            <span className='font-bold text-[30px]'>
                {
                    selected
                }
            </span>
            <div id='me'  className='border-black border-[1px] w-[300px] h-[300px] flex justify-center items-center'>
                <div  className='relative w-[80%] h-[50px]'>
                    <input autoComplete='off' onChange={(e)=>{chercher(e)}} type="text" id='mee' className='border-black border-[1px] pl-5 box-border rounded-[10px] w-full h-full absolute top-0 right-0' />
                    {
                        montrer==false?<></>:suggestion.length==0?<div className='absolute cursor-default flex justify-center items-center text-[#afafaf] w-full border  mt-3 pb-5 top-[50px] min-h-[60px]'>Aucune Suggestion</div>:suggestion.length?<div className="absolute w-full  mt-3 pb-5 top-[50px] min-h-[60px]">
                            <div ref={ref1}  className='bg-white   w-full box-border p-4  min-h-[60px] flex justify-center flex-wrap items-center border'>
                                {
                                    suggestion.map((ele,key)=>{
                                        return <div key={key} onClick={()=>{setSelected(ele.nom)}} className='h-[60px] w-full flex justify-center items-center hover:bg-[#dedede7e] cursor-default'>{ele.nom}</div>
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