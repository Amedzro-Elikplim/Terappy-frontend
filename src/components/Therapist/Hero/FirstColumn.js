import React from "react";
import styled from "styled-components";
import { primaryFont } from "../../../utils/fonts/font";
import { primaryColor, blobSecondaryColor } from "../../../utils/color/Color";

function FirstColumn() {
  return (
    <Div className="p-col-12 p-lg-6 p-md-12">
      <FirstColumnDiv>
        <Heading>BECOME AN ONLINE THERAPIST</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorem
          voluptatem nemo dolores maxime debitis impedit aperiam quos iste rem,
          quisquam minima, non molestiae eum repellendus illum neque itaque
          voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eius odio consequuntur impedit quo, animi quod numquam placeat dicta
          mollitia dignissimos amet beatae facere facilis et possimus, eos
          eveniet voluptates dolor.
        </Text>

        <ButtonDiv>
          <Button>GET STARTED</Button>
          <P>Login as therapist</P>
        </ButtonDiv>
      </FirstColumnDiv>
    </Div>
  );
}

export default FirstColumn;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Div = styled.div`
  background-color: aliceblue;
`;

const FirstColumnDiv = styled.div`
  font-family: ${primaryFont};
  height: 100%;
  background-image: url("images/welcome.svg");
  background-position: bottom;
  background-repeat: no-repeat;
  
`;

const Heading = styled.h1`
  padding: 20px;
`;
const Text = styled.p`
  padding: 15px;
  font-size: larger;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  outline: none;
  background-color: ${primaryColor};
  color: white;
  margin: 20px;
  width: 12rem;
  padding: 15px;
  cursor: pointer;
  font-weight: bold;
  font-family: ${primaryFont};
  font-size: 0.9rem;

  &:hover {
    background-color: white;
    color: ${primaryColor};
    border: 2px solid ${primaryColor};
  }
`;

const P = styled.p`
  cursor: pointer;
  color: ${blobSecondaryColor};
  font-weight: bold;
`;
