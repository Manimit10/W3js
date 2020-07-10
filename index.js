// print current day of week
const d_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const myDate = new Date();
const curr_day = myDate.getDay();
console.log(`Today is: ${d_names[curr_day]}`);

console.log(
  `${myDate.toLocaleString('en-US', {
    hour: 'numeric',
    hour12: true,
  })} : ${myDate.getMinutes()} : ${myDate.getSeconds()}`
);

//This is my test
// const testday = new Date('March 13, 8 16:20');
// console.log(myDate.getHours());
// console.log(testday.getHours());
// console.log(testday.getFullYear());
const screenPrint = document.getElementById('btn');
screenPrint.addEventListener('click', () => {
  window.print();
});
