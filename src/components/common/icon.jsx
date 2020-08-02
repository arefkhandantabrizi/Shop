import React from "react";
import icons from "../../img/sprite.svg";

const Icon = ({ name, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className={className}
  >
    <use xlinkHref={`${icons}#${name}`} />
  </svg>
);

export default Icon;
