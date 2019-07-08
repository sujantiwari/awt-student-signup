import React, {Component} from 'react';
import Input from './Input';
import Button from './Button';
import Select from 'react-select';

const theTopics = [
  {label: "Topic 1", value: 1},
  {label: "Topic 2", value: 2},
  {label: "Topic 3", value: 3},
  {label: "Topic 4", value: 4},
];

class MoreStudents extends Component{
  constructor(props){
    super(props);

    this.state = {
      newStudent: {
        name: '',
        email: '',
        matric: '',
        topics: '',
      },

      topicOptions: ['Topic1', 'Topic2', 'Topic3']
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handleMatric = this.handleMatric.bind(this);
    this.handleTopics = this.handleTopics.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFullName(e){
    let value = e.target.value;
    this.setState(
      prevState => ({
        newStudent:{
          ...prevState.newStudent,
          name: value
        }
      }),
      () => console.log(this.state.newStudent),
    );
  }

  handleEmail(e){
    let value = e.target.value;
    this.setState(
      prevState => ({
        newStudent:{
          ...prevState.newStudent,
          email: value
        }
      }),
      () => console.log(this.state.newStudent),
    );
  }

  handleMatric(e){
    let value = e.target.value;
    this.setState(
      prevState => ({
        newStudent:{
          ...prevState.newStudent,
          matric: value
        }
      }),
      () => console.log(this.state.newStudent),
    );
  }

  handleTopics(e){
    let value = e.target.value;
    this.setState(
      prevState => ({
        newStudent:{
          ...prevState.newStudent,
          topic: value
        }
      }),
      () => console.log(this.state.newStudent),
    );
  }

  handleInput(e){
    let value = e.target.value;
    let name = e.target.name;
    let email = e.target.email;
    let matric = e.target.matric;
    this.setState(
      prevState => ({
        newStudent:{
          ...prevState.newStudent,
          [name]: value
        }
      }),
      () => console.log(this.state.newStudent),
    );
  }

  handleFormSubmit(e){
    //Form Submission logic
    e.preventDefault();
    let userData = this.state.newStudent;

    fetch("http://example.com", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data)
      });
    });
  }


  render(){
    return(
      <form onSubmit={this.handleFormSubmit}>
      <h4>Add More Students:</h4>
      <h6>Student 1:</h6>
        <Input className="form-control w-75"
          inputType={"text"}
          title={"Full Name: "}
          name={"name"}
          placeholder={"Enter your name"}
          handlechange={this.handleInput}
        /> {" "}
        {/*Name of Student*/}
        <Input className="form-control w-75"
          inputType={"text"}
          title={"Email Address:"}
          name={"email"}
          placeholder={"Enter your email address"}
          handlechange={this.handleInput}
        />{" "} {/*Input for email*/}
        <Input className="form-control w-75"
          inputType={"text"}
          title={"Matric Number: "}
          name={"matric"}
          placeholder={"Enter your Matriculaton number"}
          handlechange={this.handleInput}
        /> {" "}<hr />
        <h6>Student 2:</h6>
          <Input className="form-control w-75"
            inputType={"text"}
            title={"Full Name: "}
            name={"name"}
            placeholder={"Enter your name"}
            handlechange={this.handleInput}
          /> {" "}
          {/*Name of Student*/}
          <Input className="form-control w-75"
            inputType={"text"}
            title={"Email Address:"}
            name={"email"}
            placeholder={"Enter your email address"}
            handlechange={this.handleInput}
          />{" "} {/*Input for email*/}
          <Input className="form-control w-75"
            inputType={"text"}
            title={"Matric Number: "}
            name={"matric"}
            placeholder={"Enter your Matriculaton number"}
            handlechange={this.handleInput}
          /> {" "}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};
export default MoreStudents;