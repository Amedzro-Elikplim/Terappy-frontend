import React from "react";
import styled from "styled-components";
import "primeflex/primeflex.css";
import { primaryFont } from "../../../utils/fonts/font";
import FirstColumn from "./FirstColumn";
import SecondColumn from "./SecondColumn";

function Requirements() {
  return (
    <ParentDiv>
      <Title>Requirements</Title>
      <Div className="p-grid">
        <FirstColumn />

        <SecondColumn />
      </Div>
    </ParentDiv>
  );
}

export default Requirements;

const ParentDiv = styled.div`
  background-color: aliceblue;
  padding: 20px;
`;

const Div = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  font-family: ${primaryFont};
  padding: 20px;
`;
