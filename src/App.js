import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import Home from './containers/Home';
import FoodMusic from './containers/FoodMusic';

function App() {
  return (
    <Router>
      <Switch> 
        <Route path = "/:id">
          <FoodMusic />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
