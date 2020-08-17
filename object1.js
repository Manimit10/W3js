const Student = {
  name: 'David Rayy',
  sclass: 'VI',
  rollno: 12,
};

Object.size = function (obj) {
  let size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};
const library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
  },
];

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
// Question 4
let A = document.getElementsByClassName('A');
const AuthorB = document.getElementById('Author');
AuthorB.addEventListener('click', () => {
  for (let i = 0; i < library.length; i++) {
    for (let i = 0; i < A.length; i++) {
      const elObj = library[i].author;
      const element = A[i];
      element.innerText = elObj;
    }
  }
});
let T = document.getElementsByClassName('T');
const TitleBut = document.getElementById('Title');
TitleBut.addEventListener('click', () => {
  for (let i = 0; i < library.length; i++) {
    for (let i = 0; i < T.length; i++) {
      const elObj = library[i].title;
      const element = T[i];
      element.innerText = elObj;
    }
  }
});

let R = document.getElementsByClassName('RL');
// const f = Array.from(R);
const readingBut = document.getElementById('ReadingList');
readingBut.addEventListener('click', () => {
  for (let i = 0; i < library.length; i++) {
    for (let i = 0; i < R.length; i++) {
      const element = R[i];
      const elObj = library[i].readingStatus;
      if (elObj === true) {
        element.innerText = 'already read';
      } else {
        element.innerText = 'not yet read';
      }
    }
  }
});
// Question 5

class Cylinder {
  constructor(cyl_height, cyl_diameter) {
    this.cyl_height = cyl_height;
    this.cyl_diameter = cyl_diameter;
  }
  vol() {
    const radius = this.cyl_diameter / 2;
    return this.cyl_height * Math.PI * radius * radius;
  }
}

const cylander = document.getElementById('cylander');
const cylanderVol = document.getElementById('cylanderVol');
cylander.addEventListener('click', () => {
  let height = document.getElementById('height').value;
  let diameter = document.getElementById('diameter').value;
  height = parseInt(height);
  diameter = parseInt(diameter);

  let cyl = new Cylinder(height, diameter);
  cylanderVol.innerHTML = `<p>
      The volume of cylinder is <b>${cyl.vol().toFixed(4)}</b>
    </p>`;
});
