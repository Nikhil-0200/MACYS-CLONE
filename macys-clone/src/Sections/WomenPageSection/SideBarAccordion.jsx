import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,
  } from '@chakra-ui/react';
  
  import { AddIcon, MinusIcon } from '@chakra-ui/icons';


const SideBarAccordion = ({data}) => {
  return (
    <div>
        <Accordion allowMultiple>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton className="p-[0px]">
            <Box as="span" flex='1' textAlign='left' className='font-macys-light text-sm'>
              {data.title}
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        {data.links.map((ele, index)=>(
          <AccordionPanel pb={4} key={index}>
            {ele.name}
        </AccordionPanel>  
        ))}
        
      </>
    )}
  </AccordionItem>
</Accordion>
    </div>
  )
}

export default SideBarAccordion