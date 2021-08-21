import React from "react";
import styled from "styled-components";
import Secure from "../Services/Secure";
import Schedule from "./Schedule";
import Payment from "./Payment";
import Community from "./Community";
import "primeflex/primeflex.css";

function Services() {
  return (
    <Div className="p-grid">
      <Secure />
      <Schedule />
      <Payment />
      <Community />
    </Div>
  );
}

export default Services;

const Div = styled.div`
  padding: 30px;
  min-height: 10vh;
`;
