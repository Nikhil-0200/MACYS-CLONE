import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,
    AccordionIcon,
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
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
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