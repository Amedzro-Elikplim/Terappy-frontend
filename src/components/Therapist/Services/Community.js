import React from "react";
import styled from "styled-components";
import { MdPeople } from "react-icons/md";
import "primeflex/primeflex.css";
import { primaryFont, secondaryFont } from "../../../utils/fonts/font";

function Community() {
  return (
    <CommunityDiv className="p-col-12 p-md-6 p-lg-3">
      <MdPeople className="therapist-icon" />
      <Text>Community</Text>
      <Paragraph>
        Join our community of therapist. Learn, share and meet other
        professionals
      </Paragraph>
    </CommunityDiv>
  );
}

export default Community;

const CommunityDiv = styled.div`
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
