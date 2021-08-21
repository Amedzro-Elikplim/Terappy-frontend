import React from "react";
import { RiSecurePaymentFill } from "react-icons/ri";
import { primaryFont, secondaryFont } from "../../../utils/fonts/font";
import styled from "styled-components";

function Payments() {
  return (
    <Payment className="p-col-12 p-md-6 p-lg-3">
      <RiSecurePaymentFill className="therapist-icon" />
      <Text>Fast and secure payment</Text>
      <Paragraph>Receive your income fast, secured and without delay</Paragraph>
    </Payment>
  );
}

export default Payments;

const Payment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
`;

const Text = styled.h3`
  font-family: ${secondaryFont};
`;

const Paragraph = styled.p`
  font-family: ${primaryFont};
`;
