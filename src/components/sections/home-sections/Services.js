import styled from "styled-components";
import ServiceCard from "./ServiceCard";
import {data} from "../../../utils/Data/data";
import { useMediaQuery } from "react-responsive";

const Services = () => {
   
    //react responsive easy way of creating media queries
    const Desktop = ({children}) => {
        const isDesktop = useMediaQuery({minWidth: 699});
        return isDesktop ? children : null
    }

    const Mobile = ({children}) => {
        const isMobile = useMediaQuery({maxWidth: 698});
        return isMobile ? children : null
    }


    return(
        <div>
          <Desktop>
            <ServicesSection>
                {
                    data.map((item, key) => {
                    return  <ServiceCard key={key} children={item.title} />
                    })
                }
            </ServicesSection>
         </Desktop>

         <Mobile>
            <ServicesMobileSection>
            {
            data.map((item, key) => {
                return  <MobileServiceCard key={key} children = {item.title} />
            })
            }
            </ServicesMobileSection>
         </Mobile>

        </div>
        
   
    )
}

export default Services;

const ServicesSection = styled.section`
    height: 20vh;
    padding: 40px;
    margin: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const ServicesMobileSection = styled(ServicesSection)`
    flex-direction: column;
    height: 100px;
    margin: 60px 0px;
    
     
`

const MobileServiceCard = styled(ServiceCard)`
   width: 90vw;
   height: 25vh;
   padding: 15px; 
   margin: 10px 0px;
   
`
 