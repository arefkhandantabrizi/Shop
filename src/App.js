import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
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

function App() {
  return (
    <React.Fragment>
      <ToastContainer rtl={true} />
      <div className="container">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/access-denied" component={AccessDenied} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/order-jacket" component={OrderJacketForm} />
          <Route path="/order-shirt" component={OrderShirtForm} />
          <Route path="/order-pants" component={OrderPantsForm} />
          <Route path="/order-scarf" component={OrderScarfForm} />
          <Route path="/cart" component={Cart} />
          <Route path="/validate" component={Validate} />

          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
