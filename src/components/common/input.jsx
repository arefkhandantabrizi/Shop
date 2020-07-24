import React from "react";

const Input = ({ name, label, className, error, ...rest }) => {
  return (
    <div className="form__group">
      {error && <div className="alert alert__danger rounded-pill">{error}</div>}
      <input
        {...rest}
        name={name}
        id={name}
        className={className}
        placeholder={label}
      />
      <label htmlFor={name} className="form__label">
        {label}
      </label>
    </div>
  );
};

export default Input;
