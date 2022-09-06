// Reset form on refresh
console.log("working");

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", validateForm());

// Language: javascript
function validateForm() {
  let pw1 = document.getElementById("pswd1");
  let pw2 = document.getElementById("pswd2");
  let name1 = document.getElementById("name1");
  let name2 = document.getElementById("name2");

  //check empty first name field
  if (name1 == "") {
    document.getElementById("blankMsg").innerHTML = "**Fill the first name";
    return false;
  }

  //character data validation
  if (!isNaN(name1)) {
    document.getElementById("blankMsg").innerHTML =
      "**Only characters are allowed";
    return false;
  }

  //character data validation
  if (!isNaN(name2)) {
    document.getElementById("charMsg").innerHTML =
      "**Only characters are allowed";
    return false;
  }

  //check empty password field
  if (pw1 == "") {
    document.getElementById("message1").innerHTML =
      "**Fill the password please!";
    return false;
  }

  //check empty confirm password field
  if (pw2 == "") {
    document.getElementById("message2").innerHTML =
      "**Enter the password please!";
    return false;
  }

  //minimum password length validation
  if (pw1.length < 8) {
    document.getElementById("message1").innerHTML =
      "**Password length must be atleast 8 characters";
    return false;
  }

  //maximum length of password validation
  if (pw1.length > 15) {
    document.getElementById("message1").innerHTML =
      "**Password length must not exceed 15 characters";
    return false;
  }

  if (pw1 != pw2) {
    document.getElementById("message2").innerHTML = "**Passwords are not same";
    return false;
  } else {
    alert("Your password created successfully");
    document.write("JavaScript form has been submitted successfully");
  }
}

document.getElementById("myForm").reset();
