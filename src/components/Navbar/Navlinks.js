import styled from 'styled-components';
import { primaryColor } from '../../utils/color/Color';


const Navlinks = ({className}) => {
    return(
        <StyledUnorderedList className={className}>
            <Links>Home</Links>
            <Links>Services</Links>
            <Links>Explore</Links>
            <Links>About Us</Links>
        </StyledUnorderedList>
    )
}

export default Navlinks;

const StyledUnorderedList = styled.ul`
    display: flex;
    list-style-type: none;
    width: 50vw;
    justify-content: space-evenly;
    font-family: Kurale;

`

const Links = styled.li`
    cursor: pointer;
    padding: 5px;

    &:hover {
        color: ${primaryColor};
    }
`

 