import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Login from './screens/login/Login';
import Home from './screens/home/Home';
import { PrivateRoute } from './components/privateRoute/PrivateRoute';
import UpdatePost from './screens/updatepost/UpdatePost';
import DetailsPost from './screens/detailspost/DetailsPost';

function App() {
  return (
    <Router>
      <Switch>
      <PrivateRoute path='/details/:id' component={DetailsPost} />
      <PrivateRoute path='/update/:id' component={UpdatePost} />
      <Route path='/login' component={Login} />
      <PrivateRoute  path='/' component={Home} />        
      </Switch>
  </Router>
  );
}

export default App;
