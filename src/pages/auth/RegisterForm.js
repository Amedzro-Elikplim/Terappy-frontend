import { useState } from "react";
import styled from 'styled-components';
import { primaryColor } from "../../utils/color/Color";
import { primaryFont } from "../../utils/fonts/font";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const RegisterForm = ({className}) => {

  const history = useHistory();

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
        const {first_name, last_name, email, password, confirm_password} = state;
        const data = {
            first_name,
            last_name,
            email,
            password,
            confirm_password
        }
        axios.post("http://localhost:5000/api/register", data)
             .then(response => {
                   history.push("/dashboard");
                   console.log(response);
             })
             .catch(err => {
                 console.log(err.response);
             });
    }

    return(
        <Card className={className} onSubmit={handleSubmit}>
            <RegisterText>Register</RegisterText>
            <Divider/>
            <FirstName name="first_name" onChange={handleChange} value={state.first_name || ""} type="text" placeholder="First Name" />
            <LastName name="last_name" onChange={handleChange} value={state.last_name || ""} type="text" placeholder="Last Name" />
            <Email name="email" onChange={handleChange} value={state.email || ""} type="email" placeholder="Email" />
            <Password name="password" onChange={handleChange} type="password" placeholder="Password" value={state.password || ""} />
            <ConfirmPassword name="confirm_password" onChange={handleChange} value={state.confirm_password || ""} type="password" placeholder="Confirm password" />
            <Button type="submit">CREATE ACCOUNT</Button>
        </Card>
    )
}

export default RegisterForm;


const Card = styled.form`
  height: 80vh;
  width: 90vw;
  border: none;
  outline: none;
  box-shadow: 0px 0px 10px silver;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("images/bookbg.svg");
  background-repeat: no-repeat;
`

const Divider = styled.hr`
   margin: 20px;
   background-color: #cccecf;
   height: 1px;
   width: 20vw;
   border: none;
`

const RegisterText = styled.h3`
    font-family: ${primaryFont};
    font-size: 2rem;
    color: #18191a;
`

const FirstName = styled.input`
  width: 70%;
  padding: 15px;
  margin: 10px;
  outline: none;
  border: none;
  box-shadow: 0px 0px 5px silver;
  font-family: ${primaryFont};

  &:hover {
    box-shadow: 0px 0px 20px silver;
  }
`

const LastName = styled.input`
  width: 70%;
  padding: 15px;
  margin: 10px;
  outline: none;
  border: none;
  box-shadow: 0px 0px 5px silver;
  font-family: ${primaryFont};

  &:hover {
    box-shadow: 0px 0px 20px silver;
  }
`

const Email = styled.input`
  width: 70%;
  padding: 15px;
  margin: 10px;
  outline: none;
  border: none;
  box-shadow: 0px 0px 5px silver;
  font-family: ${primaryFont};

  &:hover {
    box-shadow: 0px 0px 20px silver;
  }
`
const Password = styled.input`
  width: 70%;
  padding: 15px;
  margin: 10px;
  outline: none;
  border: none;
  box-shadow: 0px 0px 5px silver;
  font-family: ${primaryFont};

  &:hover {
    box-shadow: 0px 0px 20px silver;
  }
`

const ConfirmPassword = styled.input`
  width: 70%;
  padding: 15px;
  margin: 10px;
  outline: none;
  border: none;
  box-shadow: 0px 0px 5px silver;
  font-family: ${primaryFont};

  &:hover {
    box-shadow: 0px 0px 20px silver;
  }
`

const Button = styled.button`
  outline: none;
  border: none;
  min-width: 10vw;
  padding: 10px;
  background-color: ${primaryColor};
  color: white;
  cursor: pointer;
  margin: 20px;
  font-family: ${primaryFont};

  &:hover {
    box-shadow: 5px 10px 20px silver;
  }
`
