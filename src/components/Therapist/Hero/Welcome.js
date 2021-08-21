import React from "react";
import styled from "styled-components";
import FirstColumn from "./FirstColumn";
import SecondColumn from "./SecondColumn";
import "primeflex/primeflex.css";

function Welcome() {
  return (
    <ParentDiv className="p-grid nested-grid p-nogutter">
      <FirstColumn />
      <SecondColumn />
    </ParentDiv>
  );
}

export default Welcome;

const ParentDiv = styled.div`
  background-color: #bddcf7;
`;

 


