import styled from "styled-components";
import { blobSecondaryColor } from "../../utils/color/Color";


const ExploreCard = (props) => {

    return(
        <Card data-aos="zoom-out" data-aos-duration="500">
         <Icon>{props.icon}</Icon>
         <Text>{props.text}</Text>
        </Card>
    )
}
export default ExploreCard;


const Card = styled.div`
   height: 20vh;
   width: 20vw;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   flex: 1 1 200px;
   margin: 10px;
   cursor: pointer;

   &:hover{
       color: ${blobSecondaryColor};
   }
`

const Icon = styled.i`
   zoom: 4;
   color: #413297
`

const Text = styled.div`
   font-size: 20px;
   font-family: Raleway;
   font-weight: bolder;
`