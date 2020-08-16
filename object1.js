const Student = {
  name: 'David Rayy',
  sclass: 'VI',
  rollno: 12,
};

Object.size = function (obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

// question 1
function firstObj() {
  const obj = document.getElementById('obj1');

  obj.innerHTML = `<p>name is <b>${Student.name}</b></p>
                    <p>class is <b>${Student.sclass}</b></p>
                    <p>group is <b>${Student.rollno}</b></p>`;
}
// question 2
function delObj() {
  delete Student.rollno;
  const obj = document.getElementById('obj2');
  console.log(Student);
  obj.innerHTML = `<p>name is <b>${Student.name}</b></p>
                    <p>class is <b>${Student.sclass}</b></p>
                    <p>group is <b>${Student.rollno}</b></p>`;
}

// Question 3
function obj3() {
  const obj3 = document.getElementById('obj3');
  obj3.innerHTML = `<p>The object has <b>${Object.size(Student)}</b> members.</p>`;
}
