function validation(){
  var username = document.getElementById("uname").value;
  var password = document.getElementById("pwd").value;
  var email = document.getElementById("email").value;
  var special_characters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  var hyperlink = document.getElementById("hyperlink");

  if(username.length>18){
    alert("Check Username size; should be lesser than 18 characters");
    return;
  }

  if(!special_characters.test(password)){
    alert("Check for Special Characters ; there should be atleast 1")
    return;
  }

  if(password.length < 6){
    alert("Check Password Length ; should be greater than 6 characters");
    return;
  }

  hyperlink.innerHTML = "<a href='C:/Users/Visharad Verma/Documents/Assignments/JavaScript Project/QuizOptions/QuizOptions.html'>Go to Quiz Page</a>"

  //document.write("<a href='C:/Users/Visharad Verma/Documents/Assignments/JavaScript Project/QuizOptions/QuizOptions.html'>Go to Quiz Page</a>");

}
