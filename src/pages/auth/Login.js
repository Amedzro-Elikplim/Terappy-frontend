import styled from "styled-components";
//import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import LoginForm from "./LoginForm";


const Login = (props) => {


const Desktop = ({children}) => {
    const isDesktop = useMediaQuery({minWidth: 699});
    return isDesktop ? children : null
}

const Mobile = ({children}) => {
    const isMobile = useMediaQuery({maxWidth: 698});
    return isMobile ? children : null
}



    return(
      <div>
        <Mobile>
          <LoginFormMobile>
            <LoginForm />
          </LoginFormMobile> 
        </Mobile>
       
       <Desktop>
        <LoginFormDesktop>
           <Div></Div>
            <DesktopLoginForm />
        </LoginFormDesktop>
       </Desktop>
      </div>
      
    )
}

export default Login;

const LoginFormMobile = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const LoginFormDesktop = styled.div`
   display: flex;
   
`

const DesktopLoginForm = styled(LoginForm)`
   width: 35vw;
   height: 100vh;
   flex-grow: 1;
   flex-shrink: 1;
   background-image: url("images/bookbg.svg");
   background-repeat: no-repeat;
`

const Div = styled.div`
  width: 65vw;
  flex-grow: 1;
  flex-shrink: 1;
  background-image: url("images/Oreti.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
