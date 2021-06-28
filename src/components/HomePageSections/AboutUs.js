import styled from "styled-components"
import { primaryFont } from "../../utils/fonts/font";
import { titleTextColor } from "../../utils/color/Color";

const AboutUs = () => {
    return(
        <AboutUsSection>
            <AboutUsText>
                <About>About Us</About>
                <AboutParagraph>We are a group of therapist, dedicating our time to provide help to individuals as far as mental health is concerned</AboutParagraph>
            </AboutUsText>
         
           <AboutUsImage src={"/images/aboutImg.png"} alt="brain" />
        </AboutUsSection>
    )
}

export default AboutUs;

const AboutUsSection = styled.section`
   height: 50vh;
   background-image: linear-gradient(aliceblue, white);
   display: flex;
   justify-content: space-evenly;
   align-items: center;
`

const AboutUsImage = styled.img`
  height: 50vw;
  width: 60vw;
`

const AboutUsText = styled.div`
   text-align: center;
    
`

const About = styled.h2`
   font-family: ${primaryFont};
   color: ${titleTextColor};
   font-size: 3rem;
   padding: 1rem;
`

const AboutParagraph = styled.p`
  font-family: ${primaryFont};
  font-weight: bolder;
`