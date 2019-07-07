import React from 'react';

const Select = (props) => {
  return(
    <div className="form-group">
      <label for={props.name}>{props.title}</label>
      <select
        name={props.name}
        id={props.name}
        value={props.value}
        onChange={props.handleChange}
        className="form-control"
      >
      <option value="" disabled>{props.placeholder}</option>
      {props.options.map(option => {
        return(
          <option
            key={option}
            value={option}
            label={option}>{option}
          </option>
        );
      })}
      </select>
    </div>
  );
}

export default Select;
