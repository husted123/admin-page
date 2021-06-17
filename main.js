fetch('https://eksamen-api.herokuapp.com/api/contact')
  .then(response => response.json())
  .then(data => myFunction(data))


  let myFunction = (data) => {
    document.getElementById("number").placeholder = data.number
    document.getElementById("email").placeholder = data.email
  }

 

