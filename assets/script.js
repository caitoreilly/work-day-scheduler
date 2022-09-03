// variable for currentDay id for <p> in <header>
var currentDayElement = document.getElementById("currentDay");

// create variable to access Save button
var saveButton = document.querySelectorAll(".saveBtn");

// variable for textarea id "task" that users type in and submit
var taskLineElement = document.getElementById("task-line");

// variable for time-block class for each <div> row
var timeBlockElement = document.getElementById("time-block");

// current day displayed at top of the calendar (Moment.js)
var rightNow = moment().format("dddd, MMMM Do, YYYY");
console.log(rightNow);
currentDayElement.textContent = rightNow;


// add event listener to multiple buttons with the same class by looping through all of them
// this allows all buttons to work, and not just the first one 
for (var i = 0; i <saveButton.length; i++){
    saveButton[i].addEventListener("click", function(){
        console.log("Button was clicked");
    })
};

taskSubmit();

// create global object to hold user input for tasks
var userInput;

// when save button is clicked (this code captures button click & saves info typed in by user)
var taskSubmit = function (event) {
  event.preventDefault();
  
  // get value from input element
  userInput = {
    task: taskLineElement.value,
  };
  console.log(userInput);

  // store data

  var userInputStr = JSON.stringify(userInput);
  localStorage.setItem("userInput", userInputStr);

  // retrieve data
  var text = localStorage.getItem("userInput");
  var userInputObj = JSON.parse(text)
  document.getElementById("task-line").innerHTML = userInput.task;
};

// create function to look at data & determine time -->apply color
var trackTask = function () {};
// get time from time id in div
// convert to moment object
// do something with classes & element if it already passed (past)
// do something with classes & element if happening now (present)
// do something with classes(addClass) & element if didn't happen yet (future)

// time blocks color-coded for past, present, future

// enter event into time block --> click save button and event is saved in local storage

// event is still there when refresh page

var currentTime = moment().hour();
console.log(currentTime);

// add event listener for saveTask when user types something into time block text area & clicks save button
// saveButton.addEventListener("click", taskSubmit);

