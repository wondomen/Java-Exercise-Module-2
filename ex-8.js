const target = document.querySelector('#target');
let result = ``;

function concat(array) {
  for (let arrays of array) {
    target.innerHTML += arrays;
  }
}
const arraybal = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
concat(arraybal);
