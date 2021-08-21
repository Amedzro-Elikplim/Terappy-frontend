import styled from "styled-components";
import { primaryColor, navBg } from "../../../utils/color/Color";
import { primaryFont } from "../../../utils/fonts/font";
import { useHistory } from "react-router-dom";

const NavButton = ({ className }) => {
  const history = useHistory();

  return (
    <StyledButton className={className} onClick={() => history.push("/login")}>
      Apply as therapist
    </StyledButton>
  );
};

export default NavButton;

const StyledButton = styled.button`
  padding: 13px;
  min-width: 10vw;
  border: none;
  color: ${navBg};
  outline: none;
  box-shadow: 0px 0px 5px silver;
  background-color: ${primaryColor};
  font-family: ${primaryFont};
  font-size: 15px;
  cursor: pointer;
  font-weight: bolder;

  &:hover {
    background-color: ${primaryColor};
    color: white;
  }
`;
