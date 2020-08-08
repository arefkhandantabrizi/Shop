import React, { useEffect } from "react";
import { Route, Redirect, Switch, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/home";
import AccessDenied from "./components/accessDenied";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import OrderJacketForm from "./components/orderJacketForm";
import OrderShirtForm from "./components/orderShirtForm";
import OrderPantsForm from "./components/orderPantsForm";
import OrderScarfForm from "./components/orderScarfFrom";
import Validate from "./components/validate";
import Cart from "./components/cart";
import "react-toastify/dist/ReactToastify.css";
import AboutUs from "./components/aboutUs";

function App() {
  const location = useLocation();

  useEffect(() => {
    // console.log("Location changed", location);
  }, [location]);

  return (
    <React.Fragment>
      <ToastContainer rtl={true} />
      <div className="container">
        <Switch>
          {location.pathname === "/home" && (
            <Route path="/home" component={Home} />
          )}
          {location.pathname === "/access-denied" && (
            <Route path="/access-denied" component={AccessDenied} />
          )}
          {location.pathname === "/login" && (
            <Route path="/login" component={LoginForm} />
          )}
          {location.pathname === "/register" && (
            <Route path="/register" component={RegisterForm} />
          )}
          {location.pathname === "/order-jacket" && (
            <Route path="/order-jacket" component={OrderJacketForm} />
          )}
          {location.pathname === "/order-shirt" && (
            <Route path="/order-shirt" component={OrderShirtForm} />
          )}
          {location.pathname === "/order-pants" && (
            <Route path="/order-pants" component={OrderPantsForm} />
          )}
          {location.pathname === "/order-scarf" && (
            <Route path="/order-scarf" component={OrderScarfForm} />
          )}
          {location.pathname === "/cart" && (
            <Route path="/cart" component={Cart} />
          )}
          {location.pathname === "/validate" && (
            <Route path="/validate" component={Validate} />
          )}
          {location.pathname === "/about-us" && (
            <Route path="/about-us" component={AboutUs} />
          )}
          {location.pathname === "/not-found" && (
            <Route path="/not-found" component={NotFound} />
          )}
          <Redirect from="/" exact to="/home" />
          {location.pathname && <Redirect to="/not-found" />}
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
