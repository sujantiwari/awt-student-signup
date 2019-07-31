var submitDataDeletionRequest = (values) => {
  var response = fetch('http://localhost:9000/signup/', {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values)
  }).then( response => response.json())
  .then(result =>{
  if(result && result.success == true){
    window.alert('Data deletion request submitted successfully. An email will be sent to your email address for verification');
    window.location = './datadeleteverify';
  }
  else{
    if(result.message && result.success == false)
    {
      window.alert(result.message);
    }
    else{
      window.alert('An error has occured. Please try again later.');
    }
  }
});
}
export default submitDataDeletionRequest;