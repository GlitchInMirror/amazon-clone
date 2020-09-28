import React,{ useEffect } from 'react';
import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import Checkout from './Components/Checkout'
import Login from './Components/Login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useStateValue} from './Components/StateProvider'
import {auth} from "./Components/firebase"
import Payment from "./Components/Payment"
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HS0OMHSIm3nRwrKm7F1y4NjR1VvCeRbEGZBYOKnWkxyDSabfcapOHqIGpTY6LaiQTGFxsvYPaFArtChCsvrlygy00xHxX7efU"

);

function App() {
  const [ {}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
     
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">

              <Header />
              <Elements stripe={promise}>
                <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;