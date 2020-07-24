import React from "react";
import gal_1 from "../img/gal-1.jpg";
import gal_2 from "../img/gal-2.jpg";
import gal_3 from "../img/gal-3.jpg";
import gal_4 from "../img/gal-4.jpg";
import gal_5 from "../img/gal-5.jpg";
import gal_6 from "../img/gal-6.jpg";
import gal_7 from "../img/gal-7.jpg";
import gal_8 from "../img/gal-8.jpg";
import gal_9 from "../img/gal-9.jpg";
import gal_10 from "../img/gal-10.jpg";
import gal_11 from "../img/gal-11.jpg";
import gal_12 from "../img/gal-12.jpg";
import gal_13 from "../img/gal-13.jpg";

const Gallary = () => {
  return (
    <section className="gallery">
      <figure className="gallery__item gallery__item--1">
        <img src={gal_1} alt="Gallery 1" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--2">
        <img src={gal_2} alt="Gallery  2" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--3">
        <img src={gal_3} alt="Gallery  3" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--4">
        <img src={gal_4} alt="Gallery  4" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--5">
        <img src={gal_5} alt="Gallery  5" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--6">
        <img src={gal_6} alt="Gallery  6" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--7">
        <img src={gal_7} alt="Gallery  7" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--8">
        <img src={gal_8} alt="Gallery  8" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--9">
        <img src={gal_9} alt="Gallery  9" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--10">
        <img src={gal_10} alt="Gallery  10" className="gallery__img" />;
      </figure>
      <figure className="gallery__item gallery__item--11">
        <img src={gal_11} alt="Gallery  11" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--12">
        <img src={gal_12} alt="Gallery  12" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--13">
        <img src={gal_13} alt="Gallery  13" className="gallery__img" />
      </figure>
    </section>
  );
};

export default Gallary;
