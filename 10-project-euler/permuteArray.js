const sample = [1, 2, 3, 4];

const result = [];
function permuteArray (array) {
  result.push(array)
  if (array.length === 1) return result

  for (let i = 0; i < array.length; i++) {
    permuteArray(deleteItemFromArray(array, i))
  }

  return result;
}

function deleteItemFromArray (array, index) {
  if (array.length === 1) return
  if (index > array.length) return array

  if (index === 0) return array.slice(index+1);
  else return array.slice(0,index).concat(array.slice(index+1));
}

// console.log(permuteArray(sample));
console.log(deleteItemFromArray(sample, 2))