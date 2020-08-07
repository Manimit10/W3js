//question 21
function addPy() {
  const str = document.getElementById('string').value;
  const output = document.getElementById('outStr');
  const secDigit = str.slice(0, 2);

  if (str.length >= 2 && secDigit == 'Py') {
    output.innerHTML = `<p>You Win!</p><p>${str}</p>`;
  } else {
    outStr = 'Py' + str;
    output.innerHTML = `<p>${outStr}</p>`;
  }
}

// Question 22
function deleteChar() {
  const word = document.getElementById('word').value;
  let position = document.getElementById('position').value;
  const finalString = document.getElementById('newStr');
  position = parseInt(position);

  const arStr = Array.from(word);

  arStr.splice(position - 1, 1);
  const res = arStr.join('');

  finalString.innerHTML = `<p>You will have <em>${res}</em></p>`;
}
// Question 23
function swapStr() {
  const userWord = document.getElementById('userWord').value;
  const resStr = document.getElementById('resStr');

  if (userWord.length >= 1) {
    strAr = Array.from(userWord);
    const response = strAr.reverse();
    resStr.innerHTML = `<p>I reverse it <em>${response.join('')}<em></p>`;
  } else {
    console.log('error!');
    resStr.innerHTML = `<p>Please Eneter Something</p>`;
  }
}
// Question 24
function addFB() {
  const inStr = document.getElementById('fbStr').value;
  const out = document.getElementById('outFbStr');

  const inArr = Array.from(inStr);
  const firstChar = inArr[0];

  inArr.push(firstChar);
  inArr.unshift(firstChar);

  out.innerHTML = `<p>I changed it <em>${inArr.join('')}<em></p>`;
}
// question 25
function divide() {
  let number = document.getElementById('number').value;
  number = parseInt(number);
  const divsible = document.getElementById('divisible');

  if (number % 3 === 0) {
    divsible.innerHTML = `<p>Divisible by 3</p>`;
  } else if (number % 7 === 0) {
    divsible.innerHTML = `<p>Divisible by 7</p>`;
  } else {
    divsible.innerHTML = `<p>Not divisible by 3 and 7</p>`;
  }
}
// Question 26
function threeChar() {
  const mainStr = document.getElementById('mainStr').value;
  const out = document.getElementById('out');

  if (mainStr.length >= 3) {
    const subStr = mainStr.substring(0, 3);
    const output = subStr + mainStr + subStr;
    out.innerHTML = `<p>${output}</p>`;
  } else {
    out.innerHTML = `<p>should be more than 3 character</p>`;
  }
}
// Question 29
function threeNum() {
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  let num3 = document.getElementById('num3').value;
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  num3 = parseInt(num3);
  const result = document.getElementById('result');

  if ((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99) || (num3 >= 50 && num3 <= 99)) {
    result.innerText = 'at least one is in the range';
  } else {
    result.innerText = 'no one in the range';
  }
}
// Question 30
function checkScript() {
  const givenStr = document.getElementById('givenStr').value;
  const wordScript = document.getElementById('wordScript');
  const script = 'Script';
  const position = givenStr.indexOf(script, 4);
  // console.log(givenStr);
  // console.log(position);
  if (position === -1) {
    wordScript.innerHTML = `<p>I cound not find <b>${script}</b> in the given word</p>`;
    // console.log('I cound not find it');
  } else if (position === 4) {
    // console.log(givenStr.replace(script, ''));
    wordScript.innerHTML = `<p>See the magic: <b>${givenStr.replace(script, '')}</b></p>`;
  }
}
