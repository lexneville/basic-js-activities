//Activity 1

let name = "Bob";
let age = "25";
let favColour = "green";

console.log(`Hi my name is ${name}, I am ${age} years old and my favourite colour is ${favColour}.`)



//Activity 2

let breakfast = "Frosties";
let lunch = "sandwiches";
let dinner = "pizza";

console.log(`Today's meals consisted of ${breakfast} for breakfast, ${lunch} at lunchtime and ${dinner} in the evening.`)

breakfast = "Shreddies";
lunch = "soup";
dinner = "curry";

console.log(`Today's meals consisted of ${breakfast} for breakfast, ${lunch} at lunchtime and ${dinner} in the evening.`)



// Activity 3 - Create a program that calculates the number of days from today until your birthday.

let todaysDate =  new Date();
let nextBirthdayYear = todaysDate.getFullYear();
console.log(todaysDate)
let birthDay = new Date(nextBirthdayYear, 11, 23);

if ((todaysDate.getMonth() == birthDay.getMonth()) && todaysDate.getDate() > birthDay.getDate()) {
    nextBirthdayYear += 1
};
let timeDifference = todaysDate.getTime() - birthDay.getTime();
console.log(timeDifference)

let daysToBirthday = timeDifference / (1000 * 3600 * 24);

console.log("It is " + Math.floor(daysToBirthday) + " days until my birthday!");






