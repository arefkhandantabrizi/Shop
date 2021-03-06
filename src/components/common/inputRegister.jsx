import React from "react";

const InputRegister = ({
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
      {error && <div className="alert alert__danger rounded-pill">{error}</div>}
      <input
        {...rest}
        name={name}
        id={name}
        className={className}
        placeholder={label}
      />
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
    </div>
  );
};

export default InputRegister;
