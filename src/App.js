import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Main from './pages/dashboard/Main';
import Therapist from './pages/therapist/Therapist';
 
const App = () => {
//add lazy loading
  return (
    <BrowserRouter>
     
      <Switch>
        <Route
          exact
          path="/"
          name="Home"
          render={(props) => <Home {...props} />}
        />
        <Route
          exact
          path="/login"
          name="Login"
          render={(props) => <Login {...props} />}
        />
        <Route
          exact
          path="/register"
          name="Register"
          render={(props) => <Register {...props} />}
        />
        <Route
          exact
          path="/dashboard"
          name="Dashboard"
          render={(props) => <Main {...props} />}
        />
        <Route
          exact
          path="/therapist"
          name="Therapist"
          render={(props) => <Therapist {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );  
}

export default App;
