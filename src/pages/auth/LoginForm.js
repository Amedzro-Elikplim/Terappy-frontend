import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  primaryColor,
  titleTextColor,
  blobSecondaryColor,
} from "../../utils/color/Color";
import { primaryFont } from "../../utils/fonts/font";
import axios from "axios";

const LoginForm = ({ className }) => {
  const history = useHistory();

  const [state, setState] = useState({
    state: {
      email: "",
      password: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = state;
    const data = {
      email,
      password,
    };

    axios
      .post("http://localhost:5000/api/login", data)
      .then((response) => {
        history.push("/dashboard");
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <Card className={className} onSubmit={handleSubmit}>
      <LoginText>Login</LoginText>
      <Divider />
      <Email
        name="email"
        onChange={handleChange}
        value={state.email || ""}
        type="email"
        placeholder="Email"
      />
      <Password
        name="password"
        onChange={handleChange}
        value={state.password || ""}
        type="password"
        placeholder="Password"
      />
      <Button type="submit">LOGIN</Button>
      <P onClick={() => history.push("/register")}>
        <em>
          You do not have an account? <Span>Register here</Span>
        </em>
      </P>
    </Card>
  );
};

export default LoginForm;

const Card = styled.form`
  height: 60vh;
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
`;

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
`;

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
`;
const Divider = styled.hr`
  margin: 20px;
  background-color: #cccecf;
  height: 1px;
  width: 20vw;
  border: none;
`;

const LoginText = styled.h3`
  font-family: ${primaryFont};
  font-size: 2rem;
  color: #18191a;
`;

const Button = styled.button`
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
`;
const P = styled.p`
  color: ${titleTextColor};
  font-family: ${primaryFont};
`;

const Span = styled.span`
  font-weight: bolder;
  color: ${blobSecondaryColor};
  cursor: pointer;
`;
