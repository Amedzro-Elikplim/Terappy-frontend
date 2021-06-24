import styled from "styled-components";
import { primaryColor } from "../../utils/color/Color";

const Logo = () => {
    return(
            <LogoIcon>Terappy</LogoIcon>
    )
}

export default Logo;

const LogoIcon = styled.h3`
   font-family: Kurale;
   color: ${primaryColor};
   font-size: 2rem;

`