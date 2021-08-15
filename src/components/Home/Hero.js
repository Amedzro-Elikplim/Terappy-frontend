import Blob from "../../utils/blobs/Blob";
import styled from "styled-components";
import { primaryColor, titleTextColor } from "../../utils/color/Color";
import { useMediaQuery } from "react-responsive";
import { FiPhoneCall } from 'react-icons/fi';
import { primaryFont } from "../../utils/fonts/font";
import { useHistory } from "react-router-dom";


//react responsive easy way of creating media queries
const Desktop = ({children}) => {
    const isDesktop = useMediaQuery({minWidth: 699});
    return isDesktop ? children : null
}

const Mobile = ({children}) => {
    const isMobile = useMediaQuery({maxWidth: 698});
    return isMobile ? children : null
}

const Hero = () => {

    const history = useHistory();

    return(
        <StyledSection id="home">
            {/**section wrapped with Desktop tag will display only on desktop screens */}
            {/**start */}
            <Desktop>
            <HeroDiv data-aos="zoom-in" data-aos-duration="2000">
                <HeroText>Ohh...so you think life Sucks??</HeroText>
                <StyledQuote>
                    <q>Remember sadness is always temporary, this, too shall, pass....</q>
                </StyledQuote>

                <StyledButton onClick={() => history.push("/login")}>
                   <FiPhoneCall className="phone-icon" />  TALK TO A THERAPIST
                </StyledButton>

            </HeroDiv>
            <Blob />
            </Desktop>
            {/**end */}


            {/**section wrapped with Mobile tag will display only on mobile screens */}
            {/**start */}
            <Mobile>
            <HeroDiv>
                <HeroText>Ohh...so you think life Sucks??</HeroText>
                <StyledQuote>
                    <q>Remember sadness is always temporary, this, too shall, pass....</q>
                </StyledQuote>

                <StyledButton>
                   <FiPhoneCall className="phone-icon" />  TALK TO A THERAPIST
                </StyledButton>

            </HeroDiv>
            </Mobile>
            {/**end */}
        </StyledSection>
    )
}

export default Hero;

const StyledSection = styled.section`
   display: flex;
   justify-content: space-between;
   background-image: linear-gradient(aliceblue, white);
`

const HeroText = styled.h1`
  font-family: ${primaryFont};
  text-align: center;
  font-size: 4rem;
  color: ${titleTextColor};
  padding: 15px;
`

const HeroDiv = styled.div`
   text-align: center;
   display: flex;
   align-items: center;
   flex-direction: column;
   
`

const StyledQuote = styled.p`
   font-family: ${primaryFont};
   font-weight: bolder;
   padding: 15px;
`

const StyledButton = styled.button`
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   margin: 20px;
   padding: 15px;
   outline: none;
   border: none;
   background-color: ${primaryColor};
   color: white;
   border-radius: 5px;
   min-width: 15rem;
   font-family: ${primaryFont};
   font-weight: bold;
   cursor: pointer;

   &:hover {
     background-color: white;
     color: ${primaryColor};
     outline: 1px solid ${primaryColor};
   }

`