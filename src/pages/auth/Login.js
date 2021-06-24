import { useState } from "react";
import styled from "styled-components";
import NavButton from "../../components/Navbar/NavButton";
//import axios from 'axios';

const Login = (props) => {
    const [state, setState] = useState({
      state: {
        email: "",
        password: ""
      }
    })

    const handleChange = (e) => {
      const {name, value} = e.target;
      setState({...state, [name]: value});
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      // const {email, password} = state;
      // const data = {
      //   email,
      //   password
      // }

      

      // axios.post("http://localhost:5000/api/login", data)
      //      .then(response => {
      //        if(response) props.history.push("/home")
      //      })
      //      .catch(err => {
      //        console.log(err);
      //        alert("check console for error message");
      //      });
    }

    return(
        <LoginDiv>
          <form onSubmit = {handleSubmit}>
          <Card>
              <LoginText>Login</LoginText>
              <Divider/>
              <Email name="email" onChange={handleChange} value = {state.email || ""} type="email" placeholder="email" />
              <Password name="password" onChange={handleChange} value={state.password || ""} type="password" placeholder="password" />
              <NavButton type="submit" children={"Login"} />
          </Card>
          </form>
        </LoginDiv>
    )
}

export default Login;

const LoginDiv = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Card = styled.div`
  height: 40vh;
  width: 40vw;
  border: none;
  outline: none;
  box-shadow: 0px 0px 10px silver;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Email = styled.input`
  width: 70%;
  padding: 10px;
  margin: 10px;
  outline: none;
  border: none;
  box-shadow: 0px 0px 5px silver;
`

const Password = styled.input`
  width: 70%;
  padding: 10px;
  margin: 10px;
  outline: none;
  border: none;
  box-shadow: 0px 0px 5px silver;
`
const Divider = styled.hr`
   margin: 20px;
   background-color: #cccecf;
   height: 1px;
   width: 20vw;
   border: none;
`

const LoginText = styled.h3`
    font-family: Raleway;
    font-size: 2rem;
    color: #18191a;
`
