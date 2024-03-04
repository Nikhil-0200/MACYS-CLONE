import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button
  } from '@chakra-ui/react'

  import { Link } from "react-router-dom";

  import { useDisclosure } from '@chakra-ui/react';
  import { useRef } from 'react';
import { hamburger } from "../assets/icons";

const NavAccordion = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

  return (
    <section>
        <Button ref={btnRef} onClick={onOpen}id='ButtonMenu' >
  <img className="lg:hidden bg-none" src={hamburger} alt="menuIcon" width={30} height={30}/>
</Button>

      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />

          <DrawerBody>
            <div className='flex flex-col gap-5 py-20 '>
            
            <Link className='py-5 bg-blue-100 text-center rounded-lg text-md font-medium font-macys-bold' onClick={onClose} to="/women">Women</Link>
            
            <Link className='py-5 bg-blue-100 text-center rounded-lg text-md font-medium font-macys-bold ' to="/men" onClick={onClose}>Men</Link>
          
            
            <Link className='py-5 bg-blue-100 text-center rounded-lg text-xmdfont-medium font-macys-bold'  to="/kids" onClick={onClose}>Kids & Baby</Link>
                    
            <Link className='py-5 bg-blue-100 text-center rounded-lg text-lg fomd-medium font-macys-bold' to= "/handbags" onClick={onClose}>Handbags & Accessories</Link>
          
           
            <Link className='py-5 bg-blue-100 text-center rounded-lg text-lg fmdt-medium font-macys-bold' to ="/jewelry" onClick={onClose}>Jewelry</Link>
            
           
            <Link className='py-5 bg-blue-100 text-center rounded-lg text-xmdfont-medium font-macys-bold'  to="/sale" onClick={onClose}>Sale</Link>
         
            </div>
            
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </section>
  )
}

export default NavAccordion