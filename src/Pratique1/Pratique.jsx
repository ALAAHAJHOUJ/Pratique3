import React, { useRef, useState } from 'react'

function Pratique() {
  const ref1=useRef()
  const ref2=useRef()
  const [error,setError]=useState({})
  
  const Valider=()=>{
     const valeur1=ref1.current.value.trim()
     const valeur2=ref2.current.value.trim()
     setError({})


     if(valeur1=="") setError((prev)=>{
        return {...prev,err1:"champs vide"}
     })
     else if(valeur1.length<7){
        setError((prev)=>({...prev,err1:"taille min est 7"}))
     }

     if(valeur2==""){
        setError((prev)=>{
            return ({...prev,err2:"champs vide"})
        })
     }else if(valeur2.length<10){
        setError((prev)=>{
            return {...prev,err2:"taille min est 10"}
        })
     }
  }


  const tester=(tableau)=>{
   if(tableau.length<=1) return tableau

   const pivot=tableau[0]
   const gauche=[]
   const droite=[]

   for(let i=1;i<tableau.length;i++){
         if(pivot<tableau[i]){
            droite.push(tableau[i])
         }else {
            gauche.push(tableau[i])
         }
   }     

   return tester(droite).concat(pivot,tester(gauche))
     
  }


  const factorielle=(nb)=>{
   if(nb==1||nb==0) return 1
   else return  nb*factorielle(nb-1)
  }

  return (
    <div className=' flex justify-center bg-[#f3f2f2d9] flex-wrap content-start gap-4 w-[360px] h-[500px] rounded-[15px] m1 overflow-hidden'>
         <div className='h-[100px] w-full bg-[rgb(19,61,120)] text-white font-bold text-[30px] flex justify-center items-center'>Login</div>
         <div className=' w-full h-[200px]   flex flex-wrap justify-center content-start gap-4 box-border pt-5'>
           <input ref={ref1} type="text"  placeholder='Enter You Name' className='m1 bg-[#fffffff3] rounded-[10px] w-[80%] h-[50px] box-border pl-5' />
           {error.err1?<span className='text-red-500 '>{error.err1}</span>:<></>}
           <input ref={ref2} type="password"  placeholder='Enter You Password' className='m1 bg-[#fffffff3] rounded-[10px] w-[80%] h-[50px] box-border pl-5' />
           {error.err2?<span className='text-red-500 '>{error.err2}</span>:<></>}
         </div>  
         <button onClick={()=>{Valider();console.log(factorielle(5))}} className='bg-blue-500 mt-5 rounded-[10px] w-[120px] h-[50px] text-white font-bold hover:bg-blue-200 cursor-pointer m1'>Envoi</button>  
         <div className='flex justify-center w-full mt-4'>
           <span className='text-purple-500 underline cursor-pointer hover:no-underline '>Forgot Password?</span>
         </div>
    </div>
  )
}

export default Pratique