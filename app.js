// let date = new Date(2004, 14, 13, 7, 23, 33);

// document.write("Full Date: " + date);
// document.write("<br>");

// document.write("Year: " + date.getFullYear());
// document.write("<br>");

// document.write("Month: " + (date.getMonth() + 1));
// document.write("<br>");

// document.write("Date: " + date.getDate());
// document.write("<br>");

// document.write("Day: " + date.getDay());
// document.write("<br>");

// document.write("Hours: " + date.getHours());
// document.write("<br>");

// document.write("Minutes: " + date.getMinutes());
// document.write("<br>");

// document.write("Seconds: " + date.getSeconds());










// Exercise 1: Create a date for your birthday this year and print the day of the week as a word (like “Monday”)





let birthday=new  Date(2004,8,27);
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayOfWeek = days[birthday.getDay()];
document.write("My birthday is on: " + dayOfWeek);





// Exercise 2: Take today’s date and print what the date will be 45 days from now.
let today = new Date();
let futureDate = new Date(today);
futureDate.setDate(today.getDate() + 45);
document.write("<br>Today's date: " + today.toDateString());
document.write("<br>Date 45 days from now: " + futureDate.toDateString());

//Task
let date = new Date(2004, 5, 27, 7, 23, 33);
