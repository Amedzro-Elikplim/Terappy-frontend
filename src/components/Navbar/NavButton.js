import styled from "styled-components";
import { primaryColor, navBg } from "../../utils/color/Color";
import { primaryFont} from "../../utils/fonts/font";
import { useHistory } from "react-router-dom";

const NavButton = ({className}) => {
    const history = useHistory();

    return(
        <StyledButton className = {className} onClick={() => history.push("/login")}>LOGIN</StyledButton>
    )
}

export default NavButton;

const StyledButton = styled.button`
     padding: 10px;
     min-width: 10vw;
     border: none;
     color: ${primaryColor};
     outline: none;
     box-shadow: 0px 0px 5px silver;
     background-color: ${navBg};
     font-family: ${primaryFont};
     font-size: large;
     border-radius: 5px;
     cursor: pointer;
     font-weight: bolder;

     
     &:hover {
        background-color: ${primaryColor};
        color: white;
     }
`