import React from "react";

const InputOrder = ({
  divClass,
  labelClass,
  name,
  label,
  className,
  error,
  ...rest
}) => {
  return (
    <div className={divClass}>
      {error && <div className="orderalert orderalert__danger">{error}</div>}
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <input
        {...rest}
        name={name}
        id={name}
        className={className}
        // placeholder={label}
      />
    </div>
  );
};

export default InputOrder;
