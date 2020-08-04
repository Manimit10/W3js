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
  const newStr = document.getElementById('newStr');
  position = parseInt(position);
  position--;

  const arStr = Array.from(word);

  arStr.splice(position, 1);
  const res = arStr.join('');

  newStr.innerHTML = `<p>You will have <em>${res}</em></p>`;
}
