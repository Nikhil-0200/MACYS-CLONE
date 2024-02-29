import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,
    AccordionIcon,
  } from '@chakra-ui/react';
  
  import { AddIcon, MinusIcon } from '@chakra-ui/icons';



const FooterAccordion = ({data}) => {
  return (
    <div>
        <Accordion allowMultiple>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton className='flex items-center align-middle'>
            <Box as="span" flex='1' textAlign='left' className="font-bold text-sm py-3 flex items-center">
              {data.title}
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        {data.link.map((ele, index)=>(
          <AccordionPanel pb={4} key={index} className="text-[12px] pb-4">
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

export default FooterAccordion