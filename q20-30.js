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
