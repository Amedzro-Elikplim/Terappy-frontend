 import styled from "styled-components";
 import RegisterForm from "./RegisterForm";
 import { useMediaQuery } from "react-responsive";

const Register = () => {

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
          <RegisterFormMobile>
            <RegisterForm />
          </RegisterFormMobile>
        </Mobile>

        <Desktop>
           <RegisterFormDesktop>
             <Div></Div>
             <DesktopRegisterForm />
           </RegisterFormDesktop>
        </Desktop>
      </div>
    )
}

export default Register;

const RegisterFormMobile = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const RegisterFormDesktop = styled.div`
  display: flex;
`

const DesktopRegisterForm = styled(RegisterForm)`
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
  background-image: url("images/Waiau.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

 
