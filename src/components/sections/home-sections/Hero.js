import Blob from "../../../utils/blobs/Blob";
import styled from "styled-components";
import { primaryColor } from "../../../utils/color/Color";
import { useMediaQuery } from "react-responsive";
import { FiPhoneCall } from 'react-icons/fi'


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

    return(
        <StyledSection>
            {/**section wrapped with Desktop tag will display only on desktop screens */}
            {/**start */}
            <Desktop>
            <HeroDiv>
                <HeroText>Ohh...so you think life Sucks??</HeroText>
                <StyledQuote>
                    <q>Remember sadness is always temporary, this, too shall, pass....</q>
                </StyledQuote>

                <StyledButton>
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
  font-family: Raleway;
  text-align: center;
  font-size: 4rem;
  color: #242222;
  padding: 15px;
`

const HeroDiv = styled.div`
   text-align: center;
   display: flex;
   align-items: center;
   flex-direction: column;
   
`

const StyledQuote = styled.p`
   font-family: Raleway;
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
   font-family: Raleway;
   font-weight: bold;
   cursor: pointer;

   &:hover {
     background-color: white;
     color: ${primaryColor};
     outline: 1px solid ${primaryColor};
   }

`