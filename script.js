
// date in jumbotron

var a = moment.locale("us");
var c = moment().format("LL");
         document.getElementById("currentDay").innerHTML = c;

 // connect times to clock

 var t = new Date().getHours();

 //if (t < 10) {
//      document.write("Have a good morning!");
//  } else if (t < 20) {
//      document.write("Have a good day!");
//  } else {
//      document.write("Have a good night!");
//  }

 if (t < now) {
    document.getElementById("class", ".past");
} else if (t < 20) {
    document.write("Have a good day!");
} else {
    document.write("Have a good night!");
}

//ref to form
//ref to past time-frame rows
//ref to present time row
//ref to future time row
//user input stored in var
//clear the input?




// save button connected to local storage   (submit event)
