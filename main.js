let log = console.log;

const refData = [
  {
    id: 1,
    name: 'Harry Potter',
    house: 'Gryffindor',
    houseColor: 'red'
  },
  {
    id: 2,
    name: 'Servus Snape',
    house: 'Slytherin',
    houseColor: 'green'
  },
  {
    id: 3,
    name: 'Cedric Diggory',
    house: 'Hufflepuff',
    houseColor: 'yellow'
  },
  {
    id: 4,
    name: 'Luna Lovegood',
    house: 'Ravenclaw',
    houseColor: 'blue'
  },
]

const volArmyArr = [
  {
    name: 'Voldemort'
  }
]

let houseArr = ['Gryffindor','Slytherin','Hufflepuff','Ravenclaw'];
let houseColorsObj = {
  'Gryffindor': 'red',
  'Hufflepuff': 'yellow',
  'Slytherin': 'green',
  'Ravenclaw': 'blue'
}

const renderToDom = (selector, htmlToRender) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = htmlToRender
};

const showFormBtn = document.querySelector('.getSorted')
showFormBtn.addEventListener('click', () => {
  const formDiv = document.querySelector('#form-div');
  formDiv.style.display = 'grid'
});

const studentCardsOnDom = (arr) => { //students
  let domString = "";
for (const student of refData) {
  domString +=  `<div class="card" style="width: 18rem;" id="student-card-id">
  <div class="card-header" style="background-color:${student['houseColor']};">
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" id="list-name">${student['name']}</li>
    <li class="list-group-item" id="list-house">${student['house']}</li>
    <li class="list-group-item" id="list-button">
      <button class='exBtn' id='expell--${student.id}'>EXPELL</button>
    </li>
  </ul>
</div>`;
}
renderToDom("#student-cards-div",domString)
}

const volArmyCards = (arr) => { // voldimort army
  let domString = '';
for (const mem of volArmyArr) {
  domString += `<div class="card" style="width: 18rem;">
  <img src="https://images.ctfassets.net/usf1vwtuqyxm/5b2GMaJkpa2mWk2ewgIS8/283a62a392c740a31bfe4b823afb52b3/DeathEaters_WB_F5_DeathEaterInRobes_Illust_080615_Port.jpg" class="card-img-top" alt="..." id="army-pic">
  <div class="card-body">
    <p class="card-text">${mem.name}</p>
  </div>
</div>`
}
renderToDom("#army-member-div",domString)
}

const form = document.querySelector('form')
const addStudent = (event) => {
  event.preventDefault();
  const name = document.querySelector('#name');
  const houseRandomNum = Math.floor(Math.random() * 4);
  const house = houseArr[houseRandomNum];

    const newStudent = {
      name: name.value,
      house: house,      
      houseColor: (houseColorsObj[house]),      
      id: (refData.length +1)      
    };      
    refData.push(newStudent);      
    studentCardsOnDom(refData);      
    form.reset();
}

const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', addStudent)

const allBtn = document.querySelector('#all-btn');
const gBtn = document.querySelector('#gr-btn');
const hBtn = document.querySelector('#hu-btn');
const rBtn = document.querySelector('#ra-btn');
const sBtn = document.querySelector('#sl-btn');

const filterFunct = (arr, houseStr) => {
const filterArr = [];
  arr.forEach(el => {
    if (el.house === houseStr ) {
      filterArr.push(el)
   }
  })
return filterArr
}

allBtn.addEventListener("click", () => {
  studentCardsOnDom(refData);
  volArmyCards(volArmyArr);
  armyCount(volArmyArr);
})

gBtn.addEventListener("click", () => {
  const filter = filterFunct(refData,'Gryffindor')
  studentCardsOnDom(filter)
  let domString = ''
for (let el of filter) {
  domString += `<div class="card" style="width: 18rem;" id="student-card-id">
  <div class="card-header" style="background-color:${el['houseColor']};">
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" id="list-name">${el['name']}</li>
    <li class="list-group-item" id="list-house">${el['house']}</li>
    <li class="list-group-item" id="list-button">
      <button class='exBtn' id='expell--${el.id}'>EXPELL</button>
    </li>
  </ul>
</div>`
}
renderToDom('#student-cards-div',domString )
})

hBtn.addEventListener("click", () => {
  const filter = filterFunct(refData,"Hufflepuff")
  studentCardsOnDom(filter)
  let domString = ''
  for (let el of filter) {
    domString += `<div class="card" style="width: 18rem;" id="student-card-id">
    <div class="card-header" style="background-color:${el['houseColor']};">
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" id="list-name">${el['name']}</li>
      <li class="list-group-item" id="list-house">${el['house']}</li>
      <li class="list-group-item" id="list-button">
        <button class='exBtn' id='expell--${el.id}'>EXPELL</button>
      </li>
    </ul>
  </div>`
  }
  renderToDom('#student-cards-div',domString )
})

rBtn.addEventListener("click", () => {
  const filter = filterFunct(refData,"Ravenclaw")
  studentCardsOnDom(filter)
  let domString = ''
  for (let el of filter) {
    domString += `<div class="card" style="width: 18rem;" id="student-card-id">
    <div class="card-header" style="background-color:${el['houseColor']};">
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" id="list-name">${el['name']}</li>
      <li class="list-group-item" id="list-house">${el['house']}</li>
      <li class="list-group-item" id="list-button">
        <button class='exBtn' id='expell--${el.id}'>EXPELL</button>
      </li>
    </ul>
  </div>`
  }
  renderToDom('#student-cards-div',domString )
})

sBtn.addEventListener("click", () => {
  const filter = filterFunct(refData,"Slytherin")
  studentCardsOnDom(filter)
  let domString = ''
  for (let el of filter) {
    domString += `<div class="card" style="width: 18rem;" id="student-card-id">
    <div class="card-header" style="background-color:${el['houseColor']};">
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" id="list-name">${el['name']}</li>
      <li class="list-group-item" id="list-house">${el['house']}</li>
      <li class="list-group-item" id="list-button">
        <button class='exBtn' id='expell--${el.id}'>EXPELL</button>
      </li>
    </ul>
  </div>`
  }
  renderToDom('#student-cards-div',domString )
})

const app = document.querySelector('#all-cards')

app.addEventListener('click', (event) => {
  if (event.target.id.includes("expell")){
    const [throwAway,studentId] = event.target.id.split('--');
    const indexOfStudent = refData.findIndex(obj => obj.id === Number(studentId));
    const expelledStudentArr = refData.slice(indexOfStudent,(indexOfStudent+1));
    const expelledStudent = expelledStudentArr[0]
    volArmyArr.push(expelledStudent);
    refData.splice(indexOfStudent, 1)
  }
  studentCardsOnDom(refData);
  volArmyCards(volArmyArr);
  armyCount(volArmyArr);
});

let countHtml = document.querySelector('#vol-army-count')
const armyCount = (arr) => {
  countHtml.innerHTML = `Voldimort's Army now has ${arr.length} Member(s)`
}

const startApp = () => {
  studentCardsOnDom(refData);
  volArmyCards(volArmyArr);
  armyCount(volArmyArr);
}
startApp();
