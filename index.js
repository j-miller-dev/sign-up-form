// Reset form on refresh
console.log("working");

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function () {
  console.log("submit button clicked");
});
submitButton.addEventListener("click", validateForm);

const pw1 = document.getElementById("pswd1");
const pw2 = document.getElementById("pswd2");

// Language: javascript
function validateForm() {
  console.log("validate form");
  if (pw1.value !== pw2.value) {
    document.getElementById("message2").innerHTML = "Passwords are not same";
  } else {
    alert("Passwords match");
  }
}

// function validateForm() {
//   console.log("validate form");
//   //check empty password field
//   if (pw1 == "") {
//     document.getElementById("message1").innerHTML =
//       "**Fill the password please!";
//     return false;
//   }

//   //check empty confirm password field
//   if (pw2 == "") {
//     document.getElementById("message2").innerHTML =
//       "**Enter the password please!";
//     return false;
//   }

//   //minimum password length validation
//   if (pw1.length < 8) {
//     document.getElementById("message1").innerHTML =
//       "**Password length must be atleast 8 characters";
//     return false;
//   }

//   //maximum length of password validation
//   if (pw1.length > 15) {
//     console.log("too long");
//     document.getElementById("message1").innerHTML =
//       "**Password length must not exceed 15 characters";
//     return false;
//   }

//   if (pw1 === pw2) {
//     console.log("success");
//     alert("Your password created successfully");
//     document.write("JavaScript form has been submitted successfully");
//   } else {
//     console.log("passwords are not same");
//     // document.getElementById("message2").innerHTML = "**Passwords are not same";
//     return false;
//   }
// }

// function nameValidate() {
//   console.log("Name validation");

//   //character data validation
//   if (!isNaN(name1)) {
//     console.log("only characters are allowed");
//     document.getElementById("charMsg").innerHTML =
//       "**Only characters are allowed";
//     return false;
//   }
//   if (!isNaN(name2)) {
//     document.getElementById("charMsg").innerHTML =
//       "**Only characters are allowed";
//     return false;
//   }

//   //check empty first name field
//   if (name1 == "") {
//     document.getElementById("blankMsg").innerHTML = "First name required";
//     return false;
//   }
//   if (name2 == "") {
//     document.getElementById("blankMsg").innerHTML = "Last name required";
//     return false;
//   }
// }

// document.getElementById("myForm").reset();
