import styled from "styled-components";
import { primaryColor } from "../../utils/color/Color";
import { secondaryFont } from "../../utils/fonts/font";
const Logo = () => {
    return(
            <LogoIcon>Terappy</LogoIcon>
    )
}

export default Logo;

const LogoIcon = styled.h3`
   font-family: ${secondaryFont};
   color: ${primaryColor};
   font-size: 2rem;

`