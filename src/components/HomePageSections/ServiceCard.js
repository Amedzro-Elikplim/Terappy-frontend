import styled from "styled-components";
import { primaryFont } from "../../utils/fonts/font";
import { servicesFontColor } from "../../utils/color/Color";

const ServiceCard = (props) => {

    return(
        <Card data-aos="fade-up" data-aos-duration="500">
            <Title>{props.title}</Title>
        </Card>
    )
}

export default ServiceCard;

const Card = styled.div`
   width: 20vw;
   height: 10vh;
   border: 1px solid silver;
   border-radius: 0px;
   text-align: center;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   flex: 1 1 200px;
   margin: 20px;
    

   &:hover {
       box-shadow: 0px 0px 20px silver;
       background-color: aliceblue;
   }
`

const Title = styled.h3`
   padding: 10px;
   color: ${servicesFontColor};
   font-family: ${primaryFont};
`



