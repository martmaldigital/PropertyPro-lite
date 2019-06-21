const btn2 = document.querySelector("#regSubmit");
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



const submitSignUp = () => {
  email = document.forms.signup.email.value;
  fullname = document.forms.signup.fullname.value;
  create_password = document.forms.signup.create_password.value;
  confirm_password = document.forms.signup.confirm_password.value;
  phone = document.forms.signup.phone.value;
  if (fullname && email && phone.length === 11) {
        if (create_password && create_password.length >= 7) {
          if (create_password === confirm_password) {
                hideMessages();
            successMessage("Redirecting, Please wait...");
                const data = { email, fullname, create_password, confirm_password,phone };
                return data;
          } else errorMessage("Password do not match");
        } else errorMessage("Passwords cannot be less than 7 input");
  }  else errorMessage('Check empty field and fill correctly');
};
btn2.addEventListener("click", (event) => {
	event.preventDefault ? event.preventDefault() : (event.returnValue = false);
	if(submitSignUp()) {
		 window.location = "dashboard.html";
	}
})