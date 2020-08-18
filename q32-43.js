function Nearest() {
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  const closer = document.getElementById('close');

  if (Math.abs(num1 - 100) < Math.abs(num2 - 100)) {
    closer.innerHTML = `<p>${num1} is closer to 100</p>`;
  } else if (Math.abs(num1 - 100) === Math.abs(num2 - 100)) {
    closer.innerHTML = `<p>Are you Kidding me?</p>`;
  } else {
    closer.innerHTML = `<p>${num2} is closer to 100</p>`;
  }
}
// Question 35
function charExist() {
  const myStr = document.getElementById('myStr').value;
  const outStr = document.getElementById('outStr');

  if (myStr.charAt(1) === '@' || myStr.charAt(2) === '@' || myStr.charAt(3) === '@') {
    outStr.innerHTML = `<p>The <b>@</b> is exist between position 2 to 4</p>`;
  } else {
    outStr.innerHTML = `<p>The <b>@</b> is not exist in right place!</p>`;
  }
}
// Question 36
function lastDigit() {
  let firstNum = document.getElementById('firstNum').value;
  let SecNum = document.getElementById('SecNum').value;
  let ThirdNum = document.getElementById('ThirdNum').value;
  const msg = document.getElementById('msg');
  firstNum = parseInt(firstNum);
  SecNum = parseInt(SecNum);
  ThirdNum = parseInt(ThirdNum);
  console.log(firstNum, lastFinder(firstNum), SecNum, lastFinder(SecNum), ThirdNum, lastFinder(ThirdNum));
  if (lastFinder(firstNum) === lastFinder(SecNum) && lastFinder(firstNum) === lastFinder(ThirdNum)) {
    msg.innerHTML = `<p>Grete! All number ended with <b>${lastFinder(firstNum)}</b></p>`;
  } else {
    msg.innerHTML = `<p>Last digits are not same</p>`;
  }
}
function lastFinder(int) {
  return Math.abs(int) % 10;
}

// Question 37
function threeChar() {
  const out3Char = document.getElementById('out3Char');
  const given = document.getElementById('given').value;
  console.log(given.length);
  const sb = given.substr(0, 3);
  if (given.length >= 3) {
    out3Char.innerHTML = `<p>${sb.toLowerCase()}</p>`;
    console.log(`${sb.toLowerCase()}`);
  } else {
    console.log(`${sb.toUpperCase()} `);
    out3Char.innerHTML = `<p>${sb.toUpperCase()} </p>`;
  }
}
// Question 40
function eight() {
  let n1 = document.getElementById('number1').value;
  let n2 = document.getElementById('number2').value;
  const outEight = document.getElementById('outEight');
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  if (n1 === 8 || n2 === 8) {
    outEight.innerHTML = `<p><b>You win! </b>At least one number is equal to 8</p>`;
  } else if (n1 + n2 === 8 || n1 - n2 === 8) {
    outEight.innerHTML = `<p><b>You win! </b>Sum or difference is equal to 8</p>`;
  } else {
    outEight.innerHTML = `<p><b>Try Again!</b></p>`;
  }
}
// Question 43
function rightmost() {
  let mainInt = document.getElementById('mainInt').value;
  let outInt = document.getElementById('outInt');
  outInt.innerHTML = `<p>Rightmost Digit is <b>${lastFinder(mainInt)}</b></p>`;
}

// Question 48
function reverse() {
  const inputStr = document.getElementById('inputStr').value;
  const outputStr = document.getElementById('outputStr');
  const arr = inputStr.split('');
  const revAr = arr.reverse();

  outputStr.innerHTML = `<p><b>${revAr.join('')}</b></p>`;
}

function nextLetter() {
  const charin = document.getElementById('charin').value;
  const charout = document.getElementById('charout');
  console.log(charin);
  let see = charin.charCodeAt(0);
  console.log(see);
  let newChar = see++;
  console.log(see);
  console.log(String.fromCharCode(newChar));
}
// Question 49
function increaseDigit() {
  const strin = document.getElementById('strin').value;
  const strout = document.getElementById('strout');
  console.log(strin);
  const chars = strin.split('');
  console.log(chars);
  let nextChar = [];
  chars.forEach((el, index) => {
    let pos = strin.charCodeAt(index);
    console.log(el);
    console.log(pos);
    if (pos === 90 || pos === 122) {
      nextChar.push(String.fromCharCode(pos - 25));
    } else if ((pos > 65 && pos <= 89) || (pos >= 97 && pos <= 121)) {
      nextChar.push(String.fromCharCode(pos + 1));
    } else {
      nextChar.push(String.fromCharCode(pos));
    }
    console.log(nextChar.join(''));
  });
}
