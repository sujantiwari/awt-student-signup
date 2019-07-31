var submitDataDeletionVerification = (values) => {
  var response = fetch('http://localhost:9000/signup/verify', {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values)
  }).then( response => response.json())
  .then(result =>{
  if(result && result.success == true){
    window.alert('Your data has been successfully deleted.');
    window.location = './';
  }
  else{
    window.alert('An error has occured. Please try again later.');
  }
});
}
export default submitDataDeletionVerification;