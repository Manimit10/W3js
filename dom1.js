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
function getFormvalue() {
  const form = document.getElementById('form1');
  for (let i = 0; i < form.length; i++) {
    if (form[i].value != 'Submit') {
      console.log(form[i].value);
    }
  }
  //   let first = form.firstElementChild;
  //   let second = first.nextSibling.nextSibling.nextSibling;
  //   console.log(first.value);
  //   console.log(second.value);
}
// Question 3
function changeBG() {
  const par = document.getElementById('paragraph');
  par.style.backgroundColor = 'purple';
  //   console.log(par);
}
