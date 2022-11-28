
const userInput = prompt('Enter the number of participants:')
const names = []
const target = document.querySelector('#target');
for (let i = 0; i<userInput; i++) {
  let nameInput = prompt('Enter the name:');
  names.push(nameInput);
}
for( let name of names){
  target.innerHTML += `<ol>${name}</ol>`;
}

