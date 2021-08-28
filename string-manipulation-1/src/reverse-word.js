/* exported reverseWord */
function reverseWord(word) {
  var output = '';
  var lastCharIndex = word.length - 1;
  for (var i = lastCharIndex; i > -1; i--) {
    output += word[i];
  }
  return output;
}

// input: string
// output: string (char of word in reverse order)
// create storage for output, which is an empty string
// create storage for last char index, which is the length of the word string minus 1
// look at each character starting from the last char index one by one backwards until the value of i is no longer greater than -1
// add the word at index i to the output and assign it to output
// return output
