// Problem statement Find the christmas how many days from now.

const startDate = new Date();
const endDate = new Date("2023/12/20");
endDate.setHours(23, 59, 59);
/*When you create a Date object using the format new Date("2023/12/30"), 
it assumes a time of midnight (00:00:00) in your local time zone. However, 
if your local time zone has a positive offset from UTC, it can cause the date 
to be interpreted as the previous day in UTC.*/

// Calculate the time difference in milliseconds
console.log(startDate);
console.log(endDate);
const timeDiff = endDate - startDate;

// Convert milliseconds to days
const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

console.log(daysDiff); // Output: 6
