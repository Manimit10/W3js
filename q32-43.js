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
  return int % 10;
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
