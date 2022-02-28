import { useState } from 'react';
import Logo from "./Logo"
import NavButton from "./NavButton"
import Navlinks  from "./Navlinks"
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import {FcMenu} from 'react-icons/fc'



const Nav = () => {
   
    const [state, setState] = useState({
        state : {
            dropMenu: false
        }
    })

    const toggleMenu = () => {
        const {dropMenu} = state;
        if(dropMenu) return setState({dropMenu: false});
        setState({dropMenu: true})
    }

    const Desktop = ({children}) => {
        const isDesktop = useMediaQuery({minWidth: 699});
        return isDesktop ? children : null
    }

    const Mobile = ({children}) => {
        const isMobile = useMediaQuery({maxWidth: 698});
        return isMobile ? children : null
    }
 

    return(
        <div>
        <StyledNav>
            <Desktop>
                <Logo />
                <Navlinks />
                <NavButton />
            </Desktop>
            
            <Mobile>
                <Logo />
                <FcMenu onClick={toggleMenu} className="menu-icon"/>
            </Mobile>
        </StyledNav>
        
        <Mobile>
            {state.dropMenu ?
               <NavDropdown data-aos="fade-right" data-aos-duration="500">
                   <NavLinksDropdown />
                   <DropdownNavButton />
               </NavDropdown>
               :
               null
            }
        </Mobile>
        
        </div>
    )
}

export default Nav;


const StyledNav = styled.nav`
    display: flex;
    margin: 0px;
    height: 12vh;
    justify-content: space-between;
    padding: 0px 25px;
    box-shadow: 0px 0px 10px silver;
    align-items: center;
    flex-wrap: nowrap;
    width: 100%;
`

const NavDropdown = styled.div`
   width: 100vw;
`

const NavLinksDropdown = styled(Navlinks)`
    display: flex;
    flex-direction: column;
    padding-left: 35px;
`

const DropdownNavButton = styled(NavButton)`
   margin: 10px 40px;
   width: 100px;
   padding: 8px;
    
`


 
     



