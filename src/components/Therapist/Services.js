import React from "react";
import styled from "styled-components";
import { MdSecurity, MdPeople } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { primaryFont, secondaryFont } from "../../utils/fonts/font";
import { RiSecurePaymentFill } from "react-icons/ri";
import "primeflex/primeflex.css";

function Services() {
  return (
    <Div className="p-grid">
      <SafeSpace className="p-col-12 p-md-6 p-lg-3">
        <MdSecurity className="therapist-icon" />
        <Text>Secure therapy platform</Text>
        <Paragraph>
          We provide a secure therapy space. Interact with your clients with no
          stress
        </Paragraph>
      </SafeSpace>

      <Schedule className="p-col-12 p-md-6 p-lg-3">
        <AiOutlineSchedule className="therapist-icon" />
        <Text>Personalised Schedule</Text>
        <Paragraph>
          Use our scheduling system to schedule as many clients as you want
        </Paragraph>
      </Schedule>

      <Payment className="p-col-12 p-md-6 p-lg-3">
        <RiSecurePaymentFill className="therapist-icon" />
        <Text>Fast and secure payment</Text>
        <Paragraph>
          Receive your income fast, secured and without delay
        </Paragraph>
      </Payment>

      <Schedule className="p-col-12 p-md-6 p-lg-3">
        <MdPeople className="therapist-icon" />
        <Text>Community</Text>
        <Paragraph>
          Join our community of therapist. Learn, share and meet other
          professionals
        </Paragraph>
      </Schedule>
    </Div>
  );
}

export default Services;

const Div = styled.div`
  padding: 30px;
`;

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

const Schedule = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
`;

const Payment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
`;
