import React from "react";
import styled from "styled-components";
import { primaryFont } from "../../utils/fonts/font";
import { primaryColor } from "../../utils/color/Color";
import "primeflex/primeflex.css";

function Welcome() {
  return (
    <ParentDiv className="p-grid nested-grid p-nogutter">
      <Div className="p-col-12 p-lg-6 p-md-12">
        <FirstColumn>
          <Heading>EXPAND YOUR ONLINE THERAPY</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorem
            voluptatem nemo dolores maxime debitis impedit aperiam quos iste
            rem, quisquam minima, non molestiae eum repellendus illum neque
            itaque voluptate. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Eius odio consequuntur impedit quo, animi quod
            numquam placeat dicta mollitia dignissimos amet beatae facere
            facilis et possimus, eos eveniet voluptates dolor.
          </Text>

          <ButtonDiv>
            <Button>GET STARTED</Button>
            <p>Login as therapist</p>
          </ButtonDiv>
        </FirstColumn>
      </Div>
      <Div2 className=" p-col-12 p-lg-6 p-md-12 p-nogutter">
        <div className="p-grid">
          <ImageDiv1 className="p-col" />
          <ImageDiv2 className="p-col" />
        </div>

        <div className="p-grid">
          <ImageDiv3 className="p-col" />
          <ImageDiv4 className="p-col" />
        </div>
      </Div2>
    </ParentDiv>
  );
}

export default Welcome;

const ParentDiv = styled.div`
  background-color: #bddcf7;
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Div = styled.div`
   background-color: aliceblue;
`;

const Div2 = styled.div`
  background-color: #f0f6fc;
  height: 415px;
  margin-bottom: 20px;
`;

const FirstColumn = styled.div`
  font-family: ${primaryFont};
  height: 100%;
  background-image: url("images/welcome.svg");
  background-position: bottom;
  background-repeat: no-repeat;
`;

const ImageDiv1 = styled.div`
  background-image: url("/images/therapist1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  height: 200px;
  margin: 10px;
`;

const ImageDiv2 = styled.div`
  background-image: url("/images/therapist2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  margin: 10px;
  height: 200px;
`;

const ImageDiv3 = styled.div`
  background-image: url("/images/therapist3.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  margin: 10px;
  height: 200px;
`;

const ImageDiv4 = styled.div`
  background-image: url("/images/therapist4.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  margin: 10px;
  height: 200px;
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
