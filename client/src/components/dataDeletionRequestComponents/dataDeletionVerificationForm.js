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

const DataDeletionVerificationForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="Token"
        type="text"
        component={renderField}
        label="Enter the verification token sent to your email: "
        placeholder="Token"
      />
      <div>
        <button 
        type="submit"
        className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};
 export default reduxForm({
  form: 'dataDeletionVerificationForm', 
})(DataDeletionVerificationForm);

