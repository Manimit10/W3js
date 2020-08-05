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
    console.log(response.join(''));
    resStr.innerHTML = `<p>I reverse it <em>${response.join('')}<em></p>`;
  } else {
    console.log('error!');
    resStr.innerHTML = `<p>Please Eneter Something</p>`;
  }
}
