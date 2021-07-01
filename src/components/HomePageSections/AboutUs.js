import styled from "styled-components"
import { primaryFont } from "../../utils/fonts/font";
import { primaryColor, titleTextColor } from "../../utils/color/Color";
import { SiTwitter, SiFacebook, SiInstagram, SiLinkedin, SiYoutubetv } from 'react-icons/si';

const AboutUs = () => {
    return(
        <AboutUsSection>
            <AboutUsText>
                <About>About Us</About>
                 <AboutParagraph>
                  We are a group of health specialist, therapists, pschologist and many more dedicating our time to provide help to individuals 
                  as far as mental health is concerned. We special in helping individuals overcome anxiety, stress, depression, sucidal thoughts, addictions (alcohol, pornography etc)
                  to recover. As it is said a healthy mind lives in a healthy body, we provide other services that
                  positions clients in the right physical state to complete their recovery journey
                  </AboutParagraph>

                   <SocialIcons>
                    <SiTwitter className="social-icon" />
                    <SiFacebook className="social-icon" />
                    <SiInstagram className="social-icon" />
                    <SiLinkedin className="social-icon" />
                    <SiYoutubetv className="social-icon" />
                   </SocialIcons>
            </AboutUsText>
         
           <AboutUsImage src={"/images/aboutImg.png"} alt="Energy man" />
        </AboutUsSection>
    )
}

export default AboutUs;

const AboutUsSection = styled.section`
   background-image: linear-gradient(aliceblue, white);
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
   align-items: center;
`

const AboutUsImage = styled.img`
  height: 50vh;
  width: 60vw;
  flex: 1 1 320px;
`

const AboutUsText = styled.div`
   display: flex;
   flex-direction: column;
   text-align: justify;
   padding: 20px;
   flex: 1 1 320px;
`

const About = styled.h2`
   font-family: ${primaryFont};
   color: ${titleTextColor};
   font-size: 3rem;
   padding: 1rem;
   align-items: flex-start;
`

const AboutParagraph = styled.p`
  font-family: ${primaryFont};
  font-weight: bolder;
  line-height: 1.5rem;
`

const SocialIcons = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   margin: 20px;
   color: ${primaryColor}
`