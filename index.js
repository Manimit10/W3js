// print current day of week
const d_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const q1 = document.getElementById('q1');
const q1b = document.getElementById('q1b');

const myDate = new Date();
const curr_day = myDate.getDay();
q1.innerText = `Today is: ${d_names[curr_day]}`;

q1b.innerText = `${myDate.toLocaleString('en-US', {
  hour: 'numeric',
  hour12: true,
})} : ${myDate.getMinutes()} : ${myDate.getSeconds()}`;

//This is my test
// const testday = new Date('March 13, 8 16:20');
// console.log(myDate.getHours());
// console.log(testday.getHours());
// console.log(testday.getFullYear());

// SECOND QUESTION
const screenPrint = document.getElementById('q2');
screenPrint.addEventListener('click', () => {
  window.print();
});

//THIRD QUESTION
const q3 = document.getElementById('q3');
let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
q3.innerText = today;

function leapYear() {
  let userYear = document.getElementById('year').value;
  userYear = parseInt(userYear);

  if (!isNaN(userYear) && userYear > 1000 && userYear < 9999) {
    if (userYear % 100 === 0 && userYear % 400 === 0) {
      console.log(`${userYear} is leap year!`);
    } else {
      console.log(`${userYear} is Not leap year!`);
    }
  } else {
    console.log('Please enter a valid year');
  }
}

// return userYear % 100 === 0 ? userYear % 400 === 0 : userYear % 4 === 0;
