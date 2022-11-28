function even(array) {
  let arr = [];
  for (let arrays of array) {
    if (arrays % 2 === 0) {
      arr.push(arrays);
    }
  }
  return arr;
}

const me = [8, 1,6, 13, 3,2,10, 5, 16, 7,11,12, 9, 15];
console.log(`original array: ${me}`);
console.log(`Even array ${even(me)}`);
