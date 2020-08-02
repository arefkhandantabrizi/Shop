import React from "react";
import Icon from "./common/icon";

const Feature = () => {
  return (
    <section className="features">
      <div className="feature">
        <Icon name="icon-medal" className="feature__icon" />
        <h4 className="heading-4 heading-4--dark">با کیفیت ترین لباس فرم</h4>
        <p className="feature__text">
          تولیدی ملینا از با کیفیت ترین پارچه و البته تمیز ترین دوخت در تهیه
          لباس فرم استفاده می کند.
        </p>
      </div>

      <div className="feature">
        <Icon name="icon-truck" className="feature__icon" />
        <h4 className="heading-4 heading-4--dark">تحویل به موقع و منظم</h4>
        <p className="feature__text">
          وقت شما برای ما ارزشمند است. تحویل به موقع لباس فرم، وظیفه ای است که
          ما به آن پایندیم.
        </p>
      </div>

      <div className="feature">
        <Icon name="icon-shopping-bag" className="feature__icon" />
        <h4 className="heading-4 heading-4--dark">فروش لباس به صورت آنلاین</h4>
        <p className="feature__text">
          پوشاک ملینا با ارائه سامانه آنلاین، سلامتی و سهولت والدین محترم را
          اولویت کار خود قرار داده است.
        </p>
      </div>
    </section>
  );
};

export default Feature;
