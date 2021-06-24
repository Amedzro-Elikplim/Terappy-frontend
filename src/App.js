import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" name="Home" render = {props => <Home {...props} />} />
        <Route exact path="/login" name="Login" render = {props => <Login {...props} />} />
        <Route exact path="/register" name="Register" render = {props => <Register {...props} />} />
      </Switch>
    </BrowserRouter>
  )  
}

export default App;
