import styled from "styled-components"

const ServiceCard = (props) => {

    return(
        <Card>
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

   &:hover {
       box-shadow: 0px 0px 20px silver;
       background-color: aliceblue;
   }
`

const Title = styled.h3`
   padding: 10px;
   color: #b8bcc0;
   font-family: Raleway;
`



