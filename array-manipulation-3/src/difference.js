/* exported difference */

function difference(first, second) {
  var newArray = [];

  function notInSecond(value) {
    if (second.indexOf(value) === -1) {
      return true;
    }
    return false;
  }
  function notInFirst(value) {
    if (first.indexOf(value) === -1) {
      return true;
    }
    return false;
  }

  var firstFiltered = first.filter(notInSecond);
  var secondFiltered = second.filter(notInFirst);

  newArray = firstFiltered.concat(secondFiltered);
  return newArray;
}

// input: 2 arrays - 'first', 'second'
// output: new array containing the symmetric differences between first and second
// create storage for 'newArray' - empty array
// define a function called 'notInSecond' with parameter 'value'
//    if second array contains 'value',
//        return true;
//    return false;
// define a function called 'notInFirst' with parameter 'value'
//    if first array contains 'value',
//        return true
//    return false
// filter the first array with the 'notInSecond' function and assign result to 'firstFiltered'
// filter the second array with the 'notInFirst' function and assign result to 'secondFiltered'
// combine 'firstFiltered' and 'secondFiltered' and assign to 'newArray'
// return 'newArray'
