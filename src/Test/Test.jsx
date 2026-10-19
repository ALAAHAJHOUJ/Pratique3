import React, { useEffect, useState } from 'react'

function Test() {
  const [state1,setState1]=useState(null)


  const tester=(tableau)=>{
        let count=0;
        let condidat=-1;

        for(let nombre of tableau)
        {
            if(count==0){
                condidat=nombre
            }

            if(nombre==condidat){
                count++
            }else {
                count--
            }
        }

        console.log(condidat)
  }


  return (
    <div onClick={()=>{tester([1,1,1,0,0,9,8,7,1,1,1,1,1,6])}}  className='border-black border-[1px] w-[300px] h-[300px]'>

    </div>
  )
}

export default Test