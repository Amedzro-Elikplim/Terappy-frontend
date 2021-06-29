import styled from 'styled-components';
import { primaryFont } from '../../utils/fonts/font';
import { SiTwitter, SiFacebook, SiInstagram, SiLinkedin, SiYoutubetv, SiWhatsapp, SiWorldhealthorganization } from 'react-icons/si';
import { primaryColor } from '../../utils/color/Color';
 
const Footer = () => {
    return(
        <StyledFooter>
            <FooterDiv>
                <H3>Social Media</H3>
                <P>facebook <SiFacebook /> </P>
                <P>twitter <SiTwitter /> </P>
                <P>Instagram <SiInstagram /> </P>
                <P>Linkedin <SiLinkedin/> </P>
                <P>facebook <SiFacebook /> </P>
                <P>Youtube <SiYoutubetv/> </P>
            </FooterDiv>
            <FooterDiv>
                <H3>Terappy @2021</H3>
                <P>Accra, Central. Blue Crest Apartment</P>
                <P>Opposite, Ministry of Finance</P>
                <P>Email: terappy@gh.com</P>
                <P>Customer Service: 03333333(toll free)</P>
                <P>Whatsapp Us <SiWhatsapp />: +233545941195 </P>
                <P>Partners: WHO <SiWorldhealthorganization />, Unicef </P>
            </FooterDiv>
            <FooterDiv>A healthy mind, lives in a healthy body</FooterDiv>
        </StyledFooter>
    )
}

export default Footer;

const StyledFooter = styled.footer`
  background-Image: url("images/Wave.svg");
  background-color: rgb(94, 175, 247);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  color: white;
  justify-content: space-evenly;
  font-family: ${primaryFont};
  font-size: small;
`
const FooterDiv = styled.div`
  align-self: flex-end;
  margin: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const H3 = styled.h3`
 margin-top: 10px;
 margin-bottom: 10px;
`

const P = styled.p`
 padding: 1px;
 cursor: pointer;

 &:hover {
     color: ${primaryColor};
 }
`
