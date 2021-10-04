import React, { useState } from 'react'
import { 
        HeroContainer,
        HeroContent,
        HeroItems,
        HeroH1,
        HeroP,
        HeroBtn
        } from './HeroElements'
import NavMain from '../Navbar/NavMain'
import Sidebar from '../Sidebar'
const HeroMain = () => {
    const [isOpen,setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
     <HeroContainer>
         <NavMain toggle={toggle} />
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <HeroContent>
             <HeroItems>
                <HeroH1>INDIAN SPICES</HeroH1>
                <HeroP>Ready in 5 mins</HeroP>
                <HeroBtn>Place to Order</HeroBtn>
             </HeroItems>
         </HeroContent>
     </HeroContainer>
    )
}

export default HeroMain
