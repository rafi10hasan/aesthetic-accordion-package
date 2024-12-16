
import React from "react";

import { Minus, Plus } from "lucide-react";
import { useAccordion } from "../hooks/useAccordion";
import './style.css'

export const AccordionItem = ({ children, className="", accIndex }) => {
  const { activeIndexes, toggleAccordion } = useAccordion();

  const isActive = activeIndexes.includes(accIndex);

  const childrenArray = React.Children.toArray(children);

  const {className:titleClass,children:title} = childrenArray[0].props 
  const {className:contentClass,children:content} = childrenArray[1].props 
  
  
  return (
    <div className={`accordionItem ${className} `}>
      <div
        className="title-parent"
        onClick={() => toggleAccordion(accIndex)}
      >
        <p className={`${titleClass ? titleClass : ""}`}>{title}</p>
        <span>{isActive ? <Minus/> : <Plus/>}</span>
      </div>

      <div
        className={`accordion-transition ${
          isActive ? "active" : ""
        }`}
      >
        <div className={`content ${contentClass ? contentClass : ""}`}>{content}</div>
      </div>
    </div>
  );
};



