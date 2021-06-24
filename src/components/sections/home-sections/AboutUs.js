import styled from "styled-components"

const AboutUs = () => {
    return(
        <AboutUsSection>
            <AboutUsText>
                <About>About Us</About>
                <AboutParagraph>We are a group of therapist, dedicating our time to provide help to individuals as far as mental health is concerned</AboutParagraph>
            </AboutUsText>
         
           <Brain src={"/images/img2.png"} alt="brain" />
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

const Brain = styled.img`
  height: 50vw;
  width: 60vw;
`

const AboutUsText = styled.div`
   text-align: center;
    
`

const About = styled.h2`
   font-family: Raleway;
   color: #242222;
   font-size: 3rem;
   padding: 1rem;
`

const AboutParagraph = styled.p`
  font-family: Raleway;
  font-weight: bolder;
`