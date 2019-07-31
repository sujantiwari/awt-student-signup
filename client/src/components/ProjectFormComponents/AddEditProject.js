import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../store";
import {submitProjectForm,submitProjectFormUpdate} from "./submitProjectForm";
import ProjectsForm from "./ProjectsForm";

class AddEditProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }
  getData(id){
    var link = 'http://localhost:9000/project/'+id ;
    return fetch(link)
      .then(response => response.json());
  }
  getCategory(id){
    var link = 'http://localhost:9000/category';
    return fetch(link)
      .then(response => response.json());
  }
  getSuperVisor(id){
    var link = 'http://localhost:9000/supervisor';
    return fetch(link)
      .then(response => response.json());
  }
  mapProjectToFields(project,categories,supervisors){
    var supervisor = supervisors.filter(x=>project.ProjectSupervisorId == x.SupervisorId);
    var supervisorlabel =supervisor? supervisor[0].SupervisorName : null;
    var category = categories.filter(x=>project.CategoryId == x.CategoryId);
    var categorylabel =category? category[0].CategoryName : null;
    var field ={
      ProjectId: project.ProjectId,
      ProjectName: project.ProjectName,
      ProjectDescription: project.ProjectDescription,
      ProjectRequirements: [],
      Tasks: [],
      Supervisor:{value:project.ProjectSupervisorId, label:supervisorlabel},
      Category:{value:project.CategoryId, label:categorylabel}
    }
    project.ProjectRequirements.forEach(p=>{
      field.ProjectRequirements.push({
        Requirement:p
      })
    });
    project.Tasks.forEach(task=>{
      field.Tasks.push({
        Task:task
      })
    });  
    return field
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    var field ={
      ProjectName: "",
      ProjectDescription: "",
      ProjectRequirements: [
        {
          Requirement: ""
        }
      ],
      Tasks: [
        {
          Task: ""
        }
      ]
    };
    if(id)    {
      this.getData(id)
      .then(project =>{
        this.getCategory()
        .then(categories =>{
          this.getSuperVisor()
          .then(supervisors =>{
            var f = this.mapProjectToFields(project,categories,supervisors);
            this.setState({
              field: f,
              categories: categories.map(x=>({label :x.CategoryName, value: x.CategoryId})),
              supervisors: supervisors.map(x=>({label :x.SupervisorName, value: x.SupervisorId}))
             });
          });
        });
      });
    }
    else{
        this.getCategory()
        .then(categories =>{
          this.getSuperVisor()
          .then(supervisors =>{
            this.setState({
              field: field,
              categories: categories.map(x=>({label :x.CategoryName, value: x.CategoryId})),
              supervisors: supervisors.map(x=>({label :x.SupervisorName, value: x.SupervisorId}))
             });
          })
        });
    }
    this.getData(id);
    fetch('http://localhost:9000/category')
      .then(response => response.json())
      .then(categories => {
        fetch('http://localhost:9000/supervisor')
        .then(res=>res.json())
        .then(supervisors =>{
        });
      });
  }
  render() {
    var { supervisors, categories,field } = this.state;
    var { id} = this.props.match.params;
    return(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Add/Edit Projects</h2>
      <ProjectsForm onSubmit={id>0?submitProjectFormUpdate:submitProjectForm} supervisors={supervisors} categories={categories}  initialValues={field} />
    </div>
  </Provider>
    );
  }
}
export default AddEditProject;