(function getSession(){

  if(localStorage.getItem("userData") != null){
    document.querySelector(".main_container").classList.add("login")
  }

})();

function validateSpecialCharacter(value){
  return /[^a-zA-Z0-9\-\/]/.test(value);     
}

function validateEmail(emailField){
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return reg.test(emailField);
}

function clearValidation(){
  var y = document.querySelectorAll(".form-control");
  for (var l = 0; l < y.length; l++) {
    y[l].parentElement.classList.remove("error-group");
  }
}

function showAlert(el, message){
  el.parentElement.classList.add("error-group");
  el.parentElement.children[2].innerHTML = message;
  return false;
}

function validateForm(){
  clearValidation();
  var input = document.querySelectorAll(".required");
  for (var i = 0; i < input.length; i++) {
    if(input[i].value === ''){
     return showAlert(input[i], input[i].name+' must be filled out')
    }
  }

  var special = document.querySelectorAll(".not-special");
  for (var i = 0; i < special.length; i++) {
    if(validateSpecialCharacter(special[i].value)){
      return showAlert(special[i], 'Please fill valid ' + special[i].name)
    }
  }

  var email = document.querySelectorAll(".email");
  for (var i = 0; i < email.length; i++) {
    if(!validateEmail(email[i].value)){
      return showAlert(email[i], 'Please fill valid ' + email[i].name)
    }
  }

  var password = document.forms["register"]["password"];
  var pswConfirm = document.forms["register"]["pswConfirm"];

  if (password.value != pswConfirm.value) {
    return showAlert(pswConfirm, 'Password and Confirm Password must be same')
  }

  return true;
}

document.getElementById("registerForm").addEventListener("submit", function(event){
  event.preventDefault()
  if(validateForm()){
    var userData = {
      userName: document.forms["register"]["userName"].value,
      email: document.forms["register"]["email"].value,
      password: document.forms["register"]["password"].value,
      pswConfirm: document.forms["register"]["pswConfirm"].value
    }

    localStorage.setItem('userData', JSON.stringify(userData));
    
    document.querySelector(".main_container").classList.add("login")
    
  }
});

