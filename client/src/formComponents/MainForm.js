import React, {Component} from 'react';

class MainForm extends Component {
  state = {
    studentsName: '',
    studentsEmail: '',
    matricNumber: '',
  };

  change = e =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      studentsName: '',
      studentsEmail: '',
      matricNumber: '',
    });
  }

  render(){
    return(
      <form>
        <input
          name="studentsName"
          placeholder="Students Name"
          value={this.state.studentsName}
          onChange={e => this.change(e)}
        />
        <input
          name="studentsEmail"
          placeholder="Email Address"
          value={this.state.studentsEmail}
          onChange={e => this.change(e)}
        />
        <input
          name="matricNumber"
          placeholder="Matric Number"
          value={this.state.matricNumber}
          onChange={e => this.change(e)}
        />

        <button onClick={e => this.onSubmit(e)}>Register</button>
      </form>
    )
  }
}

export default MainForm;
