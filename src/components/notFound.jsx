import React from "react";
import NavBar from "./navBar";
import Footer from "./footer";
import notFound from "../img/notFound.jpeg";

const NotFound = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="notFound">
        <img src={notFound} className="notFound__img" alt="Not Found" />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default NotFound;
