let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let age = document.getElementById("age");
let email = document.getElementById("email");
let submitButton = document.getElementById("submitButton");
let responseHere = document.getElementById("responseHere");

submitButton.addEventListener('click', ajax);

function ajax() {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      responseHere.innerHTML = this.responseText;
    }
  };
  let httpString = "php/form_1.php?firstname=" + firstName.value + "&lastname=" + lastName.value + "&age=" + age.value + "&email=" + email.value;

  console.log(httpString);

  xmlhttp.open("GET", httpString, true);
  xmlhttp.send();
}
