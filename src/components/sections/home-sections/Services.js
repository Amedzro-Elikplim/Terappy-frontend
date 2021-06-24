import styled from "styled-components";
import ServiceCard from "./ServiceCard";
import data from "../../../utils/Data/data";

const Services = () => {
    return(
        <ServicesSection>
            {
                data.map((item, key) => {
                 return   <ServiceCard key={key} title={item.title} />
                })
            }
               
        </ServicesSection>
    )
}

export default Services;

const ServicesSection = styled.section`
    height: 20vh;
    padding: 40px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
 