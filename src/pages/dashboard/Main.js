import styled from "styled-components";

const Main = () => {
  return (
    <MainDiv>
      <Calendar>calenda</Calendar>
      <SideBar>sidebar</SideBar>
      <Section>
        <ChildDiv>Your therapist</ChildDiv>
        <ChildDiv>Recovery journey</ChildDiv>
        <ChildDiv>Goals, milestones</ChildDiv>
      </Section>
      <ChildDiv>article of the day</ChildDiv>
      <ChildDiv>settings</ChildDiv>
    </MainDiv>
  );
};

export default Main;

const MainDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 10px;
  width: 100%;
  height: 100vh;
  padding: 30px;
  background-color: aliceblue;
`;

const ChildDiv = styled.div`
  background-color: white;
  box-shadow: 1px 1px 10px silver;
`;

const Calendar = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: white;
  box-shadow: 1px 1px 10px silver;
`;

const SideBar = styled.div`
  grid-column-start: 3;
  grid-row-start: 1;
  grid-row-end: 4;
  background-color: white;
  box-shadow: 1px 1px 10px silver;
`;

const Section = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 10px;
`


