import React from "react";
import NavBar from "./navBar";
import Footer from "./footer";
import accessDenied from "../img/accessDenied.jpeg";

const AccessDenied = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="accessDenied">
        <img src={accessDenied} className="accessDenied__img" alt="Not Found" />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default AccessDenied;
