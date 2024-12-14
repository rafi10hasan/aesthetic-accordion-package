import React from 'react'
import AccordionProvider from "../provider/AccordionProvider";

export const Accordion = ({ children, className="", allowMultiple = false }) => {

  return (
      <AccordionProvider allowMultiple={allowMultiple}>
             <div className={className}>{children}</div>
      </AccordionProvider>
     
  );
};

