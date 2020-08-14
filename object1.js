const Student = {
  name: 'David Rayy',
  sclass: 'VI',
  rollno: 12,
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
