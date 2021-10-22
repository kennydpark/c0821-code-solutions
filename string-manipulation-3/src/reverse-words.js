/* exported reverseWords */
function reverseWords(string) {
  var stringArray = string.split(' ');
  var newArray = [];

  for (var i = 0; i < stringArray.length; i++) {
    var reversedWordArray = stringArray[i].split('').reverse();
    var reversedWordString = reversedWordArray.join('');
    newArray.push(reversedWordString);
  }

  var newArrayToString = newArray.join(' ');
  return newArrayToString;
}

// input: string
// output: string but each word is reversed
// turn string into an array grouped by each word and assign it to stringArray
// create storage for a new array of an empty array, called newArray
// loop through stringArray
//    for each word, turn it into an array split by each letter, reverse the order, and assign it to reversedWordArray
//    turn reversedWordArray into a string and assign it to reversedWordString
//    add reversedWordArray to newArray
// turn newArray into a string split by spaces, and assign to newArrayToString
// return newArrayToString
