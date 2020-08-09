import React from "react";
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

  return (
    <React.Fragment>
      <ToastContainer rtl={true} />
      <div className="container">
        <Switch>
          <Route
            path="/home"
            render={(props) => {
              if (location.pathname === "/home") return <Home {...props} />;
            }}
          />
          <Route
            path="/access-denied"
            render={(props) => {
              if (location.pathname === "/access-denied")
                return <AccessDenied {...props} />;
            }}
          />
          <Route
            path="/login"
            render={(props) => {
              if (location.pathname === "/login")
                return <LoginForm {...props} />;
            }}
          />
          <Route
            path="/register"
            render={(props) => {
              if (location.pathname === "/register")
                return <RegisterForm {...props} />;
            }}
          />
          <Route
            path="/order-jacket"
            render={(props) => {
              if (location.pathname === "/order-jacket")
                return <OrderJacketForm {...props} />;
            }}
          />
          <Route
            path="/order-shirt"
            render={(props) => {
              if (location.pathname === "/order-shirt")
                return <OrderShirtForm {...props} />;
            }}
          />
          <Route
            path="/order-pants"
            render={(props) => {
              if (location.pathname === "/order-pants")
                return <OrderPantsForm {...props} />;
            }}
          />
          <Route
            path="/order-scarf"
            render={(props) => {
              if (location.pathname === "/order-scarf")
                return <OrderScarfForm {...props} />;
            }}
          />
          <Route
            path="/cart"
            render={(props) => {
              if (location.pathname === "/cart") return <Cart {...props} />;
            }}
          />
          <Route
            path="/validate"
            render={(props) => {
              if (location.pathname === "/validate")
                return <Validate {...props} />;
            }}
          />
          <Route
            path="/about-us"
            render={(props) => {
              if (location.pathname === "/about-us")
                return <AboutUs {...props} />;
            }}
          />
          <Route
            path="/not-found"
            render={(props) => {
              if (location.pathname === "/not-found")
                return <NotFound {...props} />;
            }}
          />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
