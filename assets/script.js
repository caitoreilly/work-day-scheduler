// variable for currentDay id for <p> in <header>
var currentDayElement = document.getElementById("currentDay");

// create variable to access Save button (class)
var saveButton = $(".saveBtn");

// variable for textarea id "task" that users type in and submit
var taskLineElement = document.getElementById("task-line");

// current day displayed at top of the calendar (Moment.js)
var rightNow = moment().format("dddd, MMMM Do, YYYY");
console.log(rightNow);
currentDayElement.textContent = rightNow;


// logging value of what is on the page
// looking for elements that have hour class
// telling it was to run for each loop (for each is expecting a function - "for each" one you have to run these steps)
var displayPage = function () {
  $(".hour").each(function () {
    console.log();
    // this is referring to the whole ex. <div class="hour col-2">3PM</div> each time and finding the text on the page
    // then finding in local storage where the key is 9am etc. Local storage makes it a string
    // then make it an object with JSON.parse
    var timeTxt = $(this).text();
    var localStorageText = localStorage.getItem(timeTxt) || "";
    console.log(localStorageText);
    if (localStorageText) {
      var localStorageTextObj = JSON.parse(localStorageText);
      // setting value of sibling
      $(this).siblings().val(localStorageTextObj.userText);
    }
  });
};
displayPage();

// set variables for what user types into textarea & the time block 
var userText;
var userTime;

// add event listener for saveTask when user types something into time block text area & clicks save button
// will work for the multiple buttons with the same class --> this allows all buttons to work, and not just the first one
// set an event listener on each of the save.Btn classes
// click button to trigger anonymous function
// using 'this' object will get value and time for the corresponding button (the button that was clicked)
// enter event into function --> click save button and event is saved in local storage (event is still there when refresh page)
saveButton.on("click", function (event) {
  event.preventDefault();
  // $(this) will return the button we click
  // text --> use siblings("textarea") to get the sibling of the button - we specified the textarea selected & val gets the value of text area (what the user typed)
  // time --> get the parent of the button to get the id of the parent (diff hour ids from the top div) using the .attr("id") method
  userText = $(this).siblings("textarea").val();
  userTime = $(this).parent().attr("id")
  console.log(userTime, userText);

  var obj = { userTime, userText };
  console.log(obj);

  // use values from text and time variables from user input to store data (set in localstorage)
  var userInputStr = JSON.stringify(obj);
  localStorage.setItem(obj.userTime, userInputStr);
});

// get current time using Moment.js
var currentTime = moment().hour();
console.log(currentTime);

var timeBlock = $(".time-block");

// create function to look at data & determine time -->apply color to time blocks with addClass methods for past, present, and future 
$(".time-block").each(function () {
  console.log(this.dataset.time, currentTime);
  if (this.dataset.time == currentTime) {
    $(this).addClass("present");
    console.log("add present");
  }
  if (this.dataset.time < currentTime) {
    // $(this).removeClass("present");
    $(this).addClass("past");
  } if (this.dataset.time > currentTime){
    // $(this).removeClass("past");
    // $(this).removeClass("present");
    $(this).addClass("future");
  }
});
