import { useState } from "react";
import styled from "styled-components";
import NavButton from "../../components/Navbar/NavButton";
//import axios from 'axios';

const Register = (props) => {
    const [state, setState] = useState({
        state: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirm_password: ""
        }
    });

    const handleChange = (e) => {
      const {name, value} = e.target;

      setState({...state, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // const {first_name, last_name, email, password, confirm_password} = state;
        // const data = {
        //     first_name,
        //     last_name,
        //     email,
        //     password,
        //     confirm_password
        // }
        // axios.post("http://localhost:5000/api/register", data)
        //      .then(response => {
        //          if(response) {
        //             alert("registration successful....test login page with the credentials");
        //             props.history.push("/")
        //          }
              
        //      })
        //      .catch(err => {
        //          console.log(err);
        //          alert("check console for error message");
        //      });
    }



    return(
        <ParentDiv>
            <form onSubmit={handleSubmit}>

                <Card>
                    <RegisterText>Register</RegisterText>
                    <Divider/>
                    <FirstName name="first_name" onChange={handleChange} value={state.first_name || ""} type="text" placeholder="First Name" />
                    <LastName name="last_name" onChange={handleChange} value={state.last_name || ""} type="text" placeholder="Last Name" />
                    <Email name="email" onChange={handleChange} value={state.email || ""} type="email" placeholder="Email" />
                    <Password name="password" onChange={handleChange} type="password" placeholder="Password" value={state.password || ""} />
                    <ConfirmPassword name="confirm_password" onChange={handleChange} value={state.confirm_password || ""} type="password" placeholder="Confirm password" />
                    <NavButton type="submit" children={"Register"} />
                </Card>

            </form>
        </ParentDiv>
    )
}

export default Register;

const ParentDiv = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Card = styled.div`
  height: 60vh;
  width: 40vw;
  border: none;
  outline: none;
  box-shadow: 0px 0px 10px silver;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Divider = styled.hr`
   margin: 20px;
   background-color: #cccecf;
   height: 1px;
   width: 20vw;
   border: none;
`

const RegisterText = styled.h3`
    font-family: Raleway;
    font-size: 2rem;
    color: #18191a;
`

const FirstName = styled.input`
  width: 70%;
  padding: 10px;
  margin: 10px;
  outline: none;
  border: none;
  box-shadow: 0px 0px 5px silver;
`

const LastName = styled.input`
  width: 70%;
  padding: 10px;
  margin: 10px;
  outline: none;
  border: none;
  box-shadow: 0px 0px 5px silver;
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

const ConfirmPassword = styled.input`
  width: 70%;
  padding: 10px;
  margin: 10px;
  outline: none;
  border: none;
  box-shadow: 0px 0px 5px silver;
`
