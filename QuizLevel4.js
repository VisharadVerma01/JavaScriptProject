function countdown(mins) {
    var mainBlock = document.getElementById('mainBlock');
    mainBlock.style.display = "block";
    //These lines make the div block visible

    var seconds = 60; //60 seconds
    var minutes = mins; //we have provided 3 mins in the HTML file, hence var minutes = 3;
    function update() { //Function within the function, we use it so we can dynamically update
        var count = document.getElementById("demo"); //Where we will store the timer
        var curr_mins = minutes-1; // I couldn't start exactly at 3 mins, with the seconds being at 00, so I start at 2:59, making curr mins = 3-1=2
        seconds = seconds - 1; //Decrement the seconds with every instance of the class
        count.innerHTML = "Time Left is "+curr_mins.toString() + ":" + (seconds < 10 ? "0" : "") + seconds.toString();
        //Display the counter ; ternary operator will matter when seconds are lesser than 10, or else we'll get time like 2:015
        if(seconds > 0) {
            setTimeout(update, 1000); //If seconds are greater than 0, the update function will run every 1 second
        } else if(minutes > 1) { //If the minute is up, the else block will come into play
            countdown(minutes-1);
        } else { // Seconds and Minutes are up
          mainBlock.style.display = 'none'; //Hides the quiz
          alert("Your time is up. To try again, press start."); //Alert message
        }
    }
  update();   //If seconds are not up, this function update will run again, thus it will dynamically change. Plus, since Update is never called, we call it here
}

function Submit(){
  var score = 0;
  var count = 6;

  var q1 = document.fname.q1;
  var q2 = document.fname.q2;
  var q3 = document.fname.q3;
  var q4 = document.fname.q4;
  var q5 = document.fname.q5;
  var q6 = document.fname.q6.value;

  if(q1[0].checked){
    score = score + 1;
    count = count - 1;
  }

  if(q2[0].checked && q2[1].checked){
    if(q2[2].checked == false){
      score = score + 1;
      count = count - 1;
    }
  }

  if(q3[1].checked){
    score = score + 1;
    count = count - 1;
  }

  if(q4[2].checked){
    score = score + 1;
    count = count - 1;
  }

  if(q6 == 6){
    score = score + 1;
    count = count - 1;
  }

  if(q5[1].checked){
    score = score + 1;
    count = count - 1;
  }

// alert("The Score is "+score);
// alert("The wrong answers are "+count);

var myWindow = window.open("","myWindow","width=200,height=100");
myWindow.document.write("<p align = 'center'><b>Your score is " + score + "</b></p>");
myWindow.document.write("<p align = 'center'><b>You have " + count + " wrong answers</b></p>");


var mainBlock = document.getElementById('mainBlock');
mainBlock.style.display = "none";
}
