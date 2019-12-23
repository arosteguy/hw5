
// date in jumbotron
var task = localStorage.getItem("task");
var saveBtn = document.querySelectorAll("#saveBtn");
var a = moment.locale("America, Denver");

// connect times to clock
var c = moment().format("LL");
         document.getElementById("currentDay").innerHTML = c;

render
//  var t = new Date().getHours();

 //if (t < 10) {
//      document.write("Have a good morning!");
//  } else if (t < 20) {
//      document.write("Have a good day!");
//  } else {
//      document.write("Have a good night!");
//  }

 //if (t < now) {
  //  document.getElementById("class", ".past");
//} else if (t < 20) {
 //   document.write("Have a good day!");
//} else {
 //   document.write("Have a good night!");
//}

//ref to form
//ref to past time-frame rows
//ref to present time row
//ref to future time row
//user input stored in var
//clear the input?


// function render task
function render

// save button connected to local storage   (submit event)
  saveBtn.addEventListener("click", function (event){
    event.preventDefault();
    
     var nine = documentQuerySelector("#nine").value;
    localStorage.setItem("#nine", nine);
})