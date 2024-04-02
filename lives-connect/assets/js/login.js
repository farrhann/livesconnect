function login() {
    // Get the input values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Validate the email and password
    if (validateEmail(email) && validatePassword(password)) {
      // Call your authentication API here
      // For example, using the Fetch API:
      // fetch('https://your-auth-api.com/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ email, password }),
      // })
      // .then(response => response.json())
      // .then(data => console.log(data))
      // .catch(error => console.error(error));
  
      console.log(`Logged in with email: ${email}`);
    } else {
      alert("Invalid email or password");
    }
  }
  
  function validateEmail(email) {
    // Basic email validation using regex
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }
  
  function validatePassword(password) {
    // Basic password validation (minimum 8 characters)
    return password.length >= 8;
  }