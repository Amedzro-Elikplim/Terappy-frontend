import styled from "styled-components";
import { IoIosConstruct } from 'react-icons/io';
const Main = () => {
    return (
         <MainDiv>
            <IoIosConstruct className="construct-icon" />
            <h1>DASHBOARD UNDER CONSTRUCTION</h1>
         </MainDiv>
    )
};

export default Main;

const MainDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Raleway;
`;
