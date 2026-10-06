import React, { useEffect } from "react";

const MonComponent = React.memo(function MonComponent({name}) {
  
    useEffect(()=>{
        console.log("rendu")
    },)

  return <div>Bonjour</div>;
});

export default MonComponent;