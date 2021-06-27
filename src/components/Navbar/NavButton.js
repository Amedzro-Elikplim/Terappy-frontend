import styled from "styled-components";
import { primaryColor, navBg } from "../../utils/color/Color";
import { secondaryFont } from "../../utils/fonts/font";


const NavButton = ({className}) => {
    return(
        <StyledButton className={className}>Contact Us</StyledButton>
    )
}

export default NavButton;

const StyledButton = styled.button`
     padding: 5px;
     min-width: 10vw;
     border: none;
     color: ${primaryColor};
     outline: none;
     box-shadow: 0px 0px 5px silver;
     background-color: ${navBg};
     font-family: ${secondaryFont};
     font-size: large;
     border-radius: 5px;
     cursor: pointer;
     font-weight: bolder;

     
     &:hover {
        background-color: ${primaryColor};
        color: white;
     }
`