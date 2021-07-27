import styled from 'styled-components';
import { primaryColor } from '../../utils/color/Color';
import { secondaryFont } from '../../utils/fonts/font';
import { Link } from 'react-scroll';

const Navlinks = ({className}) => {
    return (
      <StyledUnorderedList className={className}>
        <Link to="home" spy smooth>
          <Links>Home</Links>
        </Link>
        <Link to="services" spy smooth>
          <Links>Services</Links>
        </Link>
        <Link to="explore" spy smooth>
          <Links>Explore</Links>
        </Link>
        <Link to="explore" spy smooth>
          <Links>For therapists</Links>
        </Link>
        <Link to="about" spy smooth>
          <Links>About Us</Links>
        </Link>
      </StyledUnorderedList>
    );
}

export default Navlinks;

const StyledUnorderedList = styled.ul`
    display: flex;
    list-style-type: none;
    width: 50vw;
    justify-content: space-evenly;
    font-family: ${secondaryFont};

`

const Links = styled.li`
    cursor: pointer;
    padding: 5px;

    &:hover {
        color: ${primaryColor};
    }
`

 