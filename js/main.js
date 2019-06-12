function validateSpecialCharacter(value){

  if( /[^a-zA-Z0-9\-\/]/.test( value ) ) {
      return false;
  }
  return true;     
}

function clearValidation(){
  var x = document.querySelectorAll(".invalid-feedback");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  var y = document.querySelectorAll(".form-control");
  for (var l = 0; l < y.length; l++) {
    y[l].classList.remove("input-alert");
  }
}

function validateEmail(emailField){
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(emailField) == false) 
  {
      return false;
  }
  return true;

}

function validateForm(){
    var userName = document.forms["register"]["userName"];
    var unameFeedback =  document.getElementById("unameFeedback");

    var email = document.forms["register"]["email"];
    var emailFeedback =  document.getElementById("emailFeedback");

    var password = document.forms["register"]["password"];
    var passwordFeedback =  document.getElementById("passwordFeedback");

    var pswConfirm = document.forms["register"]["pswConfirm"];
    var pswConfirmFeedback =  document.getElementById("pswConfirmFeedback");

    //clear validation
    clearValidation()

    if (userName.value.trim() == "") {
      userName.classList.add("input-alert");
      unameFeedback.innerHTML = "Username must be filled out";
      unameFeedback.style.display = "block";
      return false;
    }
    else if (!validateSpecialCharacter(userName.value)) {
      userName.classList.add("input-alert");
      unameFeedback.innerHTML = "Please fill valid username";
      unameFeedback.style.display = "block";
      return false;
    }
    else if (email.value.trim() == "") {
      email.classList.add("input-alert");
      emailFeedback.innerHTML = "Email must be filled out";
      emailFeedback.style.display = "block";
      return false;
    }
    else if (!validateEmail(email.value)) {
      email.classList.add("input-alert");
      emailFeedback.innerHTML = "Please fill valid Email";
      emailFeedback.style.display = "block";
      return false;
    }
    else if (password.value.trim() == "") {
      password.classList.add("input-alert");
      passwordFeedback.innerHTML = "Password must be filled out";
      passwordFeedback.style.display = "block";
      return false;
    }
    else if (pswConfirm.value.trim() == "") {
      pswConfirm.classList.add("input-alert");
      pswConfirmFeedback.innerHTML = "Confirm Password must be filled out";
      pswConfirmFeedback.style.display = "block";
      return false;
    }
    else if (password.value != pswConfirm.value) {
      pswConfirm.classList.add("input-alert");
      pswConfirmFeedback.innerHTML = "Password and Confirm Password must be same";
      pswConfirmFeedback.style.display = "block";
      return false;
    }
    return true;
}




