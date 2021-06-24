import Logo from "./Logo"
import NavButton from "./NavButton"
import Navlinks from "./Navlinks"
import styled from "styled-components";



const Nav = () => {


    return(
        <StyledNav>
            <Logo />
            <Navlinks />
            <NavButton children={"Contact Us"} />
        </StyledNav>
    )
}

export default Nav;


const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 15px;
    box-shadow: 0px 0px 10px silver;
    align-items: center;
    flex-wrap: nowrap;
`


