import React from "react";
import Header from "./header";
import Feature from "./featuer";
import Gallary from "./gallary";
import NavBar from "./navBar";
import Footer from "./footer";

const Home = () => {
  document.title = "تولیدی پوشاک ملینا ترشیز | صفحه اصلی";

  return (
    <React.Fragment>
      <NavBar />
      <Header />
      <Feature />
      <Gallary />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
