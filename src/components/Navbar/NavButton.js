
import styled from "styled-components";
import { primaryColor } from "../../utils/color/Color";
const NavButton = (props) => {
    return(
        <StyledButton>{props.children}</StyledButton>
    )
}

export default NavButton;

const StyledButton = styled.button`
     padding: 5px;
     min-width: 10vw;
     border: none;
     color: ${primaryColor};
     outline: none;
     box-shadow: 0px 0px 10px silver;
     background-color: white;
     font-family: Kurale;
     font-size: large;
     border-radius: 5px;
     cursor: pointer;
     font-weight: bolder;

     

     &:hover {
        background-color: ${primaryColor};
        color: white;
     }
`