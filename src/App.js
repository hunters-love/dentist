import logo from './logo.svg';
import './App.css';

import Services from './Page/Home/Services/Services';
import Home from './Page/Home/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Activites from './Page/Activites/Activites';
import Doctors from './Page/Doctors/Doctors';
import About from './Page/About/About';
import NotFound from './Page/NotFound/NotFound';
import Booking from './Page/Booking/Booking/Booking';
import Login from './Page/Login/Login/Login';
import Header from './Page/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivetRoute from './Page/Login/PrivetRoute/PrivetRoute';
import Footer from './Page/Footer/Footer';


function App() {


  return (
    <div className="App">


      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/login">
              <Login></Login>
            </Route>

            < PrivetRoute exact path="/booking/:serviceId">
              <Booking></Booking>
            </ PrivetRoute>

            <Route exact path="/activites">
              <Activites></Activites>
            </Route>

            <Route exact path="/doctors">
              <Doctors></Doctors>
            </Route>

            <Route path="/abouts">
              <About></About>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>

        </BrowserRouter>
      </AuthProvider>


    </div>
  );
}

export default App;
