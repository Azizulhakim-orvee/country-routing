import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from "./Components/Details/Details";
import Home from './Components/Home/Home';
import NoMatch from "./Components/NoMatch/NoMatch";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route path='/home'>
        <Home></Home> 
        </Route>
        <Route path='/details/:name'>
        <Details></Details>
        </Route>
        <Route path='*'>
        <NoMatch></NoMatch> =
        </Route>
      </Switch>
    </Router>
    
    
    
  );
}

export default App;
