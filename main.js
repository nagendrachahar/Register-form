function validateForm(){
    var psw = document.forms["register"]["psw"].value;
    var pswRepeat = document.forms["register"]["psw-repeat"].value;
    if (psw != pswRepeat) {
        alert("psw and psw-repeat must be same");
        return false;
    }
}