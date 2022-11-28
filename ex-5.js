
const number = [];
const uniq = true;
const target = document.querySelector('#target')
while(uniq){
  let userInput = parseInt(prompt('Enter the number: '));
  if (number.includes(userInput)){
    target.innerHTML = 'You already entered this number!';
    break
  }
  else{
    number.push(userInput);
  }
}
console.log(number.sort(function(a,b){return a-b}))