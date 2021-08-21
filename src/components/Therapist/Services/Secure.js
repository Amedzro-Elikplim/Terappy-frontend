import React from 'react';
import { MdSecurity } from "react-icons/md";
import styled from 'styled-components';
import "primeflex/primeflex.css";
import { primaryFont, secondaryFont } from "../../../utils/fonts/font";

function Secure() {
    return (
      <SafeSpace className="p-col-12 p-md-6 p-lg-3">
        <MdSecurity className="therapist-icon" />
        <Text>Secure therapy platform</Text>
        <Paragraph>
          We provide a secure therapy space. Interact with your clients with no
          stress
        </Paragraph>
      </SafeSpace>
    );
}

export default Secure;


const SafeSpace = styled.div`
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
