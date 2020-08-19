// Question 1
const jsStyle = document.getElementById('jsstyle');
const text = document.getElementById('text');

jsStyle.addEventListener('click', (e) => {
  e.preventDefault();

  text.style.fontFamily = 'Optima';
  text.style.fontSize = '22px';
  text.style.fontStyle = 'oblique';
  text.style.color = 'red';
});

// Question 2
