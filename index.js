// print current day of week
const d_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const myDate = new Date();
const curr_day = myDate.getDay();
console.log(`Today is: ${d_names[curr_day]}`);

const testday = new Date('March 13, 8 16:20');
console.log(myDate.getHours());
console.log(testday.getHours().toLocaleTimeString());
console.log(testday.getFullYear());
