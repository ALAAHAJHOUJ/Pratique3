import React, { useState } from 'react'

function Comp1() {

  const tester=(tableau)=>{
        let count=0;
        let condidat=-1;

        for (const nombre of tableau)
        {
          
           if(count==0){
              condidat=nombre
           }


           if(condidat==nombre) count++
           else count--

        }

        
  }


  return (
      <div onClick={()=>{tester([1,2,2,2,2,2,2,3,3,3,2,2,3,3,3,3])}} className='border-black border-[1px] w-[300px] h-[300px] rounded-[10px]'>

      </div>

  )
}

export default Comp1