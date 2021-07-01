import styled from "styled-components";
import ServiceCard from "./ServiceCard";
import { servicesData } from "../../utils/Data/data";

const Services = () => {
   
    return(
        <div>
            <ServicesSection id="services">
                {
                    servicesData.map((item, key) => {
                    return  <ServiceCard key={key} title={item.title} />
                    })
                }
            </ServicesSection>
        </div>
        
   
    )
}

export default Services;

const ServicesSection = styled.section`
    padding: 40px;
    margin: 10px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
   
`

 