import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
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
const renderTextArea = ({ input, label,placeholder, type, meta: { touched, error } }) => (
  <div className={"form-group"}>
    <label className={"form-label"}>{label}</label>
    <div>
      <textarea  className={"form-control w-75 form-input"} rows=""
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
const renderRequirements = ({ fields, meta: { touched, error, submitFailed } }) => (
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
          style={{  margin: "10px 10px 10px 10px", 'float':'right', display: index >0? 'block':'none' }} 
          onClick={() => fields.remove(index)}>Remove</button>
      <Field
        name={`${member}.Requirement`}
        type="text"
        component={renderField}
        label="Requirement: "
        placeholder="requirement"
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
    style={{  margin: "10px 10px 10px 10px", align:'right' }} 
    onClick={() => fields.push({})}>Add Requirement</button>
  {(touched || submitFailed) && error && <span>{error}</span>}
  </div>
  </div>
);
const renderTasks = ({ fields, meta: { touched, error, submitFailed } }) => (
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
          style={{  margin: "10px 10px 10px 10px", 'float':'right', display: index >0? 'block':'none' }} 
          onClick={() => fields.remove(index)}>Remove</button>
      <Field
        name={`${member}.Task`}
        type="text"
        component={renderField}
        label="Task: "
        placeholder="task"
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
    style={{  margin: "10px 10px 10px 10px" }} 
    onClick={() => fields.push({})}>Add Tasks</button>
  {(touched || submitFailed) && error && <span>{error}</span>}
  </div>
  </div>
);

const ProjectsForm = props => {
  const { handleSubmit, pristine, reset, submitting, supervisors,categories } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="ProjectName"
        type="text"
        component={renderField}
        label="Project Name: "
        placeholder="Enter Project name:"
      /> 
      <Field
        name="ProjectDescription"
        type="text"
        component={renderTextArea}
        label="Description: "
        placeholder="Enter Project Description"
      /> 
      <Field
        name="Supervisor"
        component={renderSelect}
        label="Supervisor: "
        placeholder="Select Project SuperVisor"
        options={supervisors}
      /> 
      <Field
        name="Category"
        component={renderSelect}
        label="Category: "
        placeholder="Select category"
        options={categories}
      /> 
       <input type="hidden" name="ProjectId" />
      <FieldArray name="ProjectRequirements" component={renderRequirements}  />
      <FieldArray name="Tasks" component={renderTasks}  />

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
  form: 'projectsForm'
})(ProjectsForm);

