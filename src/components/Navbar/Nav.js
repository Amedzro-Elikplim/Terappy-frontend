import { useState } from 'react';
import Logo from "./Logo"
import NavButton from "./NavButton"
import Navlinks  from "./Navlinks"
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import {FcMenu} from 'react-icons/fc'
import { navBg } from '../../utils/color/Color';



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
               <NavDropdown>
                   <NavLinksDropdown />
                   <DropdownNavButton  />
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
    height: 10vh;
    display: flex;
    margin: 0px;
    //position: fixed;
    justify-content: space-between;
    padding: 15px 25px;
    box-shadow: 0px 0px 10px silver;
    align-items: center;
    flex-wrap: nowrap;
    width: 100%;
    //background-color: ${navBg};
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
    padding: 5px;
`


 
     



