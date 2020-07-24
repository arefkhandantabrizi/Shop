import React from "react";
// import Logo from "../img/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__box">
        <h3 className="heading-3">برای اولین بار در منطقه</h3>
        <h1 className="heading-1--light">
          لباس فرم مدارس را به صورت آنلاین سفارش دهید
        </h1>
      </div>
      <button className="btn header__btn"> ثبت سفارش</button>
    </header>
  );
};

export default Header;
