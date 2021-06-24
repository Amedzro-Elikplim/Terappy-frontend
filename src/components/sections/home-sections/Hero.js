import Blob from "../../../utils/blobs/Blob";
import styled from "styled-components";
import { primaryColor } from "../../../utils/color/Color";

const Hero = () => {
    return(
        <StyledSection>
            <HeroDiv>
                <HeroText>Ohh...so you think life Sucks??</HeroText>
                <StyledQuote>
                    <q>Remember sadness is always temporary, this, too shall, pass....</q>
                </StyledQuote>

                <StyledButton>
                     TALK TO A THERAPIST
                </StyledButton>

            </HeroDiv>
            <Blob />
        </StyledSection>
    )
}

export default Hero;

const StyledSection = styled.section`
   display: flex;
   justify-content: space-between;
   background-image: linear-gradient(aliceblue, white);
   height: 50vh;
`

const HeroText = styled.h1`
  font-family: Raleway;
  text-align: center;
  font-size: 4rem;
  color: #242222;
  padding: 10px;
`

const HeroDiv = styled.div`
   text-align: center;
   
`

const StyledQuote = styled.p`
   font-family: Raleway;
   font-weight: bolder;
   padding: 5px;
`

const StyledButton = styled.button`
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

   &:hover {
     background-color: white;
     color: ${primaryColor};
     outline: 1px solid ${primaryColor};
   }

`