
import React from "react";

import { Minus, Plus } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useAccordion } from "../hooks/useAccordion";


export const AccordionItem = ({ children, className="", accIndex }) => {
  const { activeIndexes, toggleAccordion } = useAccordion();
  const isActive = activeIndexes.includes(accIndex);
  
  const itemClass = twMerge("cursor-pointer bg-white mb-2 max-w-[80vw] md:max-w-[40vw] lg:max-w-[35vw] mx-auto shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0] rounded-sm",className);


  // Separate title and content using React children pattern
  const childrenArray = React.Children.toArray(children);
  const {className:titleClass,children:title} = childrenArray[0].props 
  const {className:contentClass,children:content} = childrenArray[1].props 
  
  const finalTitleClass = twMerge("text-md",titleClass)
  const finalContentClass = twMerge("px-3 pb-3",contentClass)


  return (
    <div className={itemClass}>
      <div
        className="px-3 py-3 flex justify-between gap-3"
        onClick={() => toggleAccordion(accIndex)}
      >
        <p className={finalTitleClass}>{title}</p>
        <span className="cursor-pointer">{isActive ? <Minus/> : <Plus/>}</span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isActive ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className={finalContentClass}>{content}</div>
      </div>
    </div>
  );
};



