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
