import React from "react";

const TextAreaRegistration = ({ divClass, name, label, error, ...rest }) => {
  return (
    <div className={divClass}>
      <textarea
        {...rest}
        name={name}
        id={name}
        placeholder={label}
        className="form__input"
      />
      <label htmlFor={name} className="form__label">
        {label}
      </label>
      {error && <div className="alert alert__danger">{error}</div>}
    </div>
  );
};

export default TextAreaRegistration;
