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
    if ((userYear % 4 === 0 && userYear % 100 != 0) || userYear % 400 === 0) {
      console.log(`${userYear} is leap year!`);
    } else {
      console.log(`${userYear} is Not leap year!`);
    }
  } else {
    console.log('Please enter a valid year');
  }
}
// short form of if-else statement
// return userYear % 100 === 0 ? userYear % 400 === 0 : userYear % 4 === 0;

// find years between 2014-2050 where the 1st January is Sunday
const q7 = document.getElementById('q7');

for (i = 2014; i <= 2050; i++) {
  let theYear = new Date(`January 1, ${i}`);
  // console.log(theYear.getDay());
  if (theYear.getDay() === 0) {
    q7.innerHTML += `<p>Year of ${theYear.getFullYear()} starts on Sunday!</p>`;
    // console.log(`Year of ${theYear.getFullYear()} starts on Sunday!`);
  }
}

const cristmas = new Date('Dec 25, 2020');
// const todayDate = Date().toString();

// console.log(todayDate.getDay());
const checkDay = new Date(Date().toString());
// console.log(todayDate);
console.log(checkDay);

const diffTime = Math.abs(cristmas - checkDay);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// console.log(diffDays + ' days');

const q9 = document.getElementById('q9');
q9.append(`We have ${diffDays} days until Cristmas.`);

// console.log(today.getFullYear());
