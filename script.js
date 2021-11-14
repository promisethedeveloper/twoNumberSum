function twoNumberSum(array, targetSum) {
  
  array.sort(function(a,b) {
    return a - b;
  });
  
  let left = 0;
  let right = array.length - 1;
  
  while (left < right) {
    let currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right++;
    }
  }
  return [];
}

console.log(twoNumberSum([1,2,3,4,5,6,7,8,9], 17))