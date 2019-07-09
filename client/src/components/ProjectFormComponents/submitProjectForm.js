var submitForm = (values,method) => {
  var response = fetch('http://localhost:9000/project', {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values)
  }).then( response => response.json())
  .then(result =>{
  if(result && ((method =='POST'&& result.ProjectId >0)||(method =='PUT'&& result.length >0&& result[0] >0)))
  {
    var message = method=='POST'?'Project added successfully.': 'Project updated successfully';
    window.alert(message);
    window.location = '/adminpanel';
  }
  else{
    window.alert('An error has occured. Please try again later.');
  }
});
}
var submitProjectForm =(values)=>{
  submitForm(values,'POST');
}
var submitProjectFormUpdate =( values)=>{
  submitForm(values,'PUT');
}
export{ submitProjectForm,submitProjectFormUpdate};