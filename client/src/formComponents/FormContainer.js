import React, {Component} from 'react';
import Input from './Input';
import Button from './Button';
import Select from 'react-select';


class FormContainer extends Component{
  constructor(props) {
    super(props);

    this.state = {
      projects:[],
      signupData: {
        Students:[],
        Projects:[]
      },
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handleMatric = this.handleMatric.bind(this);
    this.handleTopics = this.handleTopics.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  componentDidMount() {
    fetch('http://localhost:9000/project/')
      .then(response => response.json())
      .then(data => this.setState({ projects: data }));
  };

  handleFullName(e){
    let value = e.target.value;
    this.setState(
      state => ({
        signupData:{
          ...state.signupData,
          name: value
        }
      }),
      () => console.log(this.state.signupData),
    );
  }

  handleEmail(e){
    let value = e.target.value;
    this.setState(
      prevState => ({
        signupData:{
          ...prevState.signupData,
          email: value
        }
      }),
      () => console.log(this.state.signupData),
    );
  }

  handleMatric(e){
    let value = e.target.value;
    this.setState(
      prevState => ({
        signupData:{
          ...prevState.signupData,
          matric: value
        }
      }),
      () => console.log(this.state.signupData),
    );
  }

  handleTopics(e){
    let value = e.target.value;
    this.setState(
      prevState => ({
        signupData:{
          ...prevState.signupData,
          topic: value
        }
      }),
      () => console.log(this.state.signupData),
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
    const { projects } = this.state.projects.map(x=> x.ProjectName);
    return(
      <form onSubmit={this.handleFormSubmit}>
      <h3>Register</h3>
        <Input className={"form-control w-75"}
          type={"text"}
          title={"Full Name: "}
          name="name"
          placeholder={"Enter your name"}
          handlechange={this.handleInput}
        /> {" "}
        {/*Name of Student*/}
        <Input className={"form-control w-75"}
          type={"text"}
          title={"Email Address:"}
          name="email"
          placeholder={"Enter your email address"}
          onChange={this.handleInput}
        />{" "} {/*Input for email*/}
        <Input className={"form-control w-75"}
          type={"text"}
          title={"Matric Number: "}
          name={"matric"}
          placeholder={"Enter your Matriculaton number"}
          onChange={this.handleInput}
        /> {" "}
        <p>Select Topic 1</p>
        <Select className={"w-75"}
        options={projects}
        /><br />
        <p>Select Topic 2</p>
        <Select className={"w-75"}
        options={projects}
        /><br />
        <p>Select Topic 3</p>
        <Select className={"w-75"}
        options={projects}
        />
        {/*Input for matric*/}
        <hr />
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Register"}
          style={buttonStyle}
        />{" "}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};
export default FormContainer;
