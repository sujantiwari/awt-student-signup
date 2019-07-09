var submitForm = (values) => {
  var response = fetch('http://localhost:9000/signup', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values)
  }).then( response => response.json())
  .then(result =>{
  if(result && result.success == "true"){
    window.alert('Application Submitted successfully. An email will be sent to your email address for verification');
    window.location = './';
  }
  else{
    window.alert('An error has occured. Please try again later.');
  }
});
}
export default submitForm;