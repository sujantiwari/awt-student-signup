import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
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

const DataDeletionForm = props => {
  const { handleSubmit, pristine, reset, submitting, projects } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="Email"
        type="text"
        component={renderField}
        label="Email Address: "
        placeholder="Enter your email address"
      />
      <Field
        name="MatriculationNumber"
        type="text"
        component={renderField}
        label="Matriculation Number: "
        placeholder="Enter Matriculation Number"
      />
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
  form: 'dataDeletionForm', 
})(DataDeletionForm);

