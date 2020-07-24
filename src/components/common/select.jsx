import React from "react";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="form__group">
      <select name={name} id={name} {...rest} className="form-control ">
        <option value="" disabled hidden>
          {label}
        </option>
        {options.map((option) => (
          <option required key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      <label htmlFor={name} className="form__label">
        {label}
      </label>
      {error && <div className="alert alert__danger">{error}</div>}
    </div>
  );
};

export default Select;
