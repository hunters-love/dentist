import logo from './logo.svg';
import './App.css';

import Services from './Page/Home/Services/Services';
import Home from './Page/Home/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Activites from './Page/Activites/Activites';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/activites">
            <Activites></Activites>
          </Route>

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
