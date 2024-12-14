import React from 'react'
import { useState } from "react"
import AccordionContext from "../context/accordionContext";

const AccordionProvider = ({children,allowMultiple})=>{
   const [activeIndexes,setActiveIndexes] = useState([]);
   
   const toggleAccordion = (index) => {
    if (allowMultiple) {
      setActiveIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setActiveIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };
   return (
     <AccordionContext.Provider value={{activeIndexes,toggleAccordion}}>
            {children}
     </AccordionContext.Provider>
   )
}

export default AccordionProvider