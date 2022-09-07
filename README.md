# work-day-scheduler 

---

The goal of this assignment was to create the JavaScript and HTML code for a Work Day Scheduler application that allows users to save tasks they need to complete each hour of the day. Click to access my project's webpage [here](https://caitoreilly.github.io/work-day-scheduler/).

## Description 

---

When a user opens up the application, they are able to click in any time block to type a task or reminder to themselves. When they click the save button at the end of the row, an event listener is activated and triggers an anonymous function to get the values (information typed) in the sibling textarea element and the parent div element's time id. These text & time values are set in local storage and remain on the page even when it is refreshed. Moment.js is utilized to display the current date on the top of the webpage. It is also used to set the current time variable. A function was created to use the id hour of each time block row to compare to the current time variable. If the time block matches the current hour, the row turns red. If the time block is before the current time, the row turns grey. Lastly, if the time block is after (later than) the current time, the row turns green. 


### Technologies 

---

My project was created with:

- CSS
- HTML
- JavaScript 
- jQuery
- Moment.js
- Google Fonts
- Bootstrap

#### Screenshot 

---

This image displays a few saved tasks in the Work Day Scheduler web application.

![Work Day Scheduler Image](/assets/work-day-scheduler-image.png)

##### Sources 

---

This site was built using [GitHub Pages](https://pages.github.com/).
