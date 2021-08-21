import React from "react";
import { AiOutlineSchedule } from "react-icons/ai";
import styled from "styled-components";
import "primeflex/primeflex.css";
import { primaryFont, secondaryFont } from "../../../utils/fonts/font";

function Schedules() {
  return (
    <Schedule className="p-col-12 p-md-6 p-lg-3">
      <AiOutlineSchedule className="therapist-icon" />
      <Text>Personalised Schedule</Text>
      <Paragraph>
        Use our scheduling system to schedule as many clients as you want
      </Paragraph>
    </Schedule>
  );
}

export default Schedules;

const Schedule = styled.div`
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
