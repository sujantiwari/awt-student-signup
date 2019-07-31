var submitLoginForm = (values) => {
    var response = fetch('http://localhost:9000/auth', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values)
    }).then( response => response.json())
    .then(result =>{
    if(result && result.success == "true"){
        localStorage.setItem('x-auth-token', result.token);
        window.location = './';
    }
    else{
      window.alert('An error has occured. Please try again later.');
    }
  });
  }
  export default submitLoginForm;