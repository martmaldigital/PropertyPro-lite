const btn = document.querySelector('#submit');
const success = document.getElementById('success');
const error = document.getElementById('error');

const successMessage = (message) => {
	success.style.visibility = 'visible';
	success.innerHTML = message;
};

const hideMessages = () => {
	error.style.visibility = 'hidden';
	success.style.visibility = 'hidden';	
};

const errorMessage = (message) => {
	error.style.visibility = 'visible';
	error.innerHTML = message;
};

const submitSignIn = () => {
  email = document.forms.signin.email.value;
  password = document.forms.signin.password.value;
  if (email == 'digital@gmail.com') {
    if (password == 'property') {
      hideMessages();
      successMessage("Login successful, welcome...");
      const data = { email, password };
      return data;
    } else errorMessage("Password not valid");
  }  else errorMessage('Enter a valid email address');
};


btn.addEventListener("click", (event) => {
	event.preventDefault ? event.preventDefault() : event.returnValue = false;
	if(submitSignIn()) {
		window.location = 'dashboard.html';
	}
})