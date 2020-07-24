import React from "react";
import icons from "../../img/sprite.svg";

const Icon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className={`feature__icon`}
  >
    <use xlinkHref={`${icons}#${props.name}`} />
  </svg>
);

export default Icon;
