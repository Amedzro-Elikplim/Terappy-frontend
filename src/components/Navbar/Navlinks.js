import styled, {css} from 'styled-components';
import { primaryColor } from '../../utils/color/Color';
const Navlinks = () => {
    return(
        <StyledUnorderedList>
            <Links>Home</Links>
            <Links>Services</Links>
            <Links>Products</Links>
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

    ${props => props.dropdown && css`
        flex-direction: column;
    `}
`

const Links = styled.li`
    cursor: pointer;

   
    &:hover {
        color: ${primaryColor};
    }
`

 