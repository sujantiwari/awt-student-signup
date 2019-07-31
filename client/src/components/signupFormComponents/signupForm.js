import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import validate from './validate';
import Select from 'react-select';
const renderField = ({ input, label,placeholder, type, meta: { touched, error } }) => (
  <div className={"form-group"}>
    <label className={"form-label"}>{label}</label>
    <div>
      <input className={"form-control w-75 form-input"}
      {...input} 
      type={type} 
      placeholder={placeholder} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
const renderSelect = ({ input, options, label, placeholder,  meta: { touched, error } }) => (
  <div className={"form-group"}>
    <label className={"form-label"}>{label}</label>
    <div>
      <Select  className={" w-75 form-input"} 
      {...input} 
      onBlur={() => input.onBlur(input.value)}
      options={options}
      placeholder={placeholder} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
const renderMembers = ({ fields, meta: { touched, error, submitFailed } }) => (
  <div>
    <ul style={{'listStyleType' : 'none' }}>
    {fields.map((member, index) => (
      <li key={index}>
      <div style={
        {'padding': '10px',
      'borderLeft': '6px solid #2196f3',
      'backgroundColor': '#f1f1f1'}} >
        <button
          type="button"
          className="btn btn-primary" 
          style={{  margin: "10px 10px 10px 10px", 'float':'right' }} 
          onClick={() => fields.remove(index)}>Remove</button>
        <h4>Group Member #{index + 1}</h4>
      <Field
        name={`${member}.FirstName`}
        type="text"
        component={renderField}
        label="First Name: "
        placeholder="Enter First Name"
      /> 
      <Field
        name={`${member}.MiddleName`}
        type="text"
        component={renderField}
        label="Middle Name: "
        placeholder="Enter Middle Name"
      /> 
      <Field
        name={`${member}.LastName`}
        type="text"
        component={renderField}
        label="Last Name: "
        placeholder="Enter Last Name"
      /> 
      <Field
        name={`${member}.EmailAddress`}
        type="text"
        component={renderField}
        label="Email Address: "
        placeholder="Enter Email Address"
      /> 
      <Field
        name={`${member}.MatriculationNumber`}
        type="text"
        component={renderField}
        label="Matriculation Number: "
        placeholder="Enter Matriculation Number"
      />
      </div>
      </li>
    ))}
    <li>
    </li>
  </ul>
  <div>
  <button 
    type="button"
    className="btn btn-primary" 
    style={{  margin: "10px 10px 10px 10px", display: fields.length <=1? 'block':'none' }} 
    onClick={() => fields.push({})}>Add Member</button>
  {(touched || submitFailed) && error && <span>{error}</span>}
  </div>
  </div>
);

const SignupForm = props => {
  const { handleSubmit, pristine, reset, submitting, projects } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="FirstName"
        type="text"
        component={renderField}
        label="First Name: "
        placeholder="Enter First Name"
      /> 
      <Field
        name="MiddleName"
        type="text"
        component={renderField}
        label="Middle Name: "
        placeholder="Enter Middle Name"
      /> 
      <Field
        name="LastName"
        type="text"
        component={renderField}
        label="Last Name: "
        placeholder="Enter Last Name"
      /> 
      <Field
        name="EmailAddress"
        type="text"
        component={renderField}
        label="Email Address: "
        placeholder="Enter Email Address"
      /> 
      <Field
        name="MatriculationNumber"
        type="text"
        component={renderField}
        label="Matriculation Number: "
        placeholder="Enter Matriculation Number"
      /> 
      <Field
        name="FirstProject"
        component={renderSelect}
        label="Project first priority: "
        placeholder="Select first priority project"
        options={projects}
      /> 
      <Field
        name="SecondProject"
        component={renderSelect}
        label="Project second priority: "
        placeholder="Select second priority project"
        options={projects}
      /> 
      <Field
        name="ThirdProject"
        component={renderSelect}
        label="Project third priority: "
        placeholder="Select third priority project"
        options={projects}
      /> 

      <FieldArray name="members" component={renderMembers}  />
      <div>
        <button 
        type="submit"
        className="btn btn-primary"  
        disabled={submitting}>Submit</button>
      </div>
    </form>
  );
};
 export default reduxForm({
  form: 'signupForm', 
  validate
})(SignupForm);

