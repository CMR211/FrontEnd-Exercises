const sample = [1, 2, 3];

console.log(permuteArray(sample))
// result: [ [ 1, 2, 3 ], [ 2, 3 ], [ 3 ], [ 2 ], [ 1, 3 ], [ 1 ], [ 1, 2 ] ]
// todo: sort by inner array length 

export default permuteArray

/////////////////////////////////////////////////////

function permuteArray (array) {
  const result = [];
  // define recursive function
  const permute = (a) => {
    result.push(a);
    if (a.length === 1) return;
    for (let i = 0; i < a.length; i++) {
      permute(deleteItemFromArray(a, i))
    }
  }
  // run recursive function
  permute(array);
  // return result cleaned from duplicates 
  return deleteDuplicates(result);
}

function deleteDuplicates (array) {
  // since elements in result array are also arrays it is harder for js to spot duplicates 
  // only primitives can be directly compared so we stringify inner arrays
  const tempArray = array.map(i => i = JSON.stringify(i))
  // then create a new set to remove duplicates and immedietely back to array
  const tempSet = [...new Set(tempArray)]
  // and finally parse its elements from strings to arrays
  const cleanedArray = tempSet.map(i => i = JSON.parse(i))
  return cleanedArray
}

function deleteItemFromArray (array, index) {
  // had to create new function to delete one item from an array
  // splice won't work because it modifies the original array

  // guard cases
  if (array.length === 1) return
  if (index > array.length) return array
  
  if (index === 0) return array.slice(index+1);
  else return array.slice(0,index).concat(array.slice(index+1));
}