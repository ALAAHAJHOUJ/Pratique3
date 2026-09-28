import { useRef, useState } from "react";


function App() {

  const [liste,setListe]=useState([])
  const [state,setState]=useState("")
  const nbFois=useRef(0)


  const Ajouter=()=>{
    if(liste.length==10) return 

    setListe((prev)=>{
       if(prev.length==0) return [{id:1}]
       return [...prev,{id:prev[prev.length-1].id+1}]
    })
  }


  return (
    <>
        <span className="text-[30px] font-bold">
          {
            nbFois.current<=20?state:"nombre limite depassé"
          }
        </span>
        <div onClick={Ajouter} className="border-black border-[1px] w-[300px] min-h-[300px] p-5 flex flex-wrap justify-center items-center gap-4 box-content">
            {
              liste.map((ele,key)=>{
                return <div   onClick={()=>{if(nbFois.current<=20)setState(ele.id);nbFois.current++;}} key={ele.id} className="bg-green-400 hover:bg-black transition-all duration-300 rounded-[10px] text-white w-[80px] h-[80px] flex justify-center items-center">{ele.id}</div>
              })
            }
        </div>

    </>
  );
}

export default App;
