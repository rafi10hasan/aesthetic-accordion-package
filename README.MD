
# aesthetic-accordion

This is An accordion UI component used to display a list of items, each of which can be expanded or collapsed to reveal or hide associated content.


## Authors

- [@rafi10hasan](https://github.com/rafi10hasan)


## Installation

Install my-package with npm

```bash
  npm i aesthetic-accordion

```
    
## Usage/Examples

```javascript
import {Accordion,AccordionItem,AccordionTitle,AccordionContent} from 'aesthetic-accordion'

function App() {
  return 
  <> 
   <Accordion allowMultiple={false}>
        <AccordionItem accIndex={0}>
          <AccordionTitle>title1</AccordionTitle>
          <AccordionContent>content1</AccordionContent>
        </AccordionItem>
        <AccordionItem accIndex={1}>
          <AccordionTitle>title2</AccordionTitle>
          <AccordionContent>content2</AccordionContent>
        </AccordionItem>
        <AccordionItem accIndex={2}>
          <AccordionTitle>title3</AccordionTitle>
          <AccordionContent>content3</AccordionContent>
        </AccordionItem>
      </Accordion>
  </>
}
```

