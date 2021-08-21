import React from 'react';
import Logo from "../../../components/Navbar/Logo";
import NavButton from './NavButton';
import styled from 'styled-components';

function Nav() {
    return (
        <Div>
            <Logo />
            <NavButton />
        </Div>
    )
}

export default Nav;

const Div = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 10px;
 height: 12vh;
`