/* exported capitalizeWords */
function capitalizeWords(string) {
  var output = '';
  output += string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    if (string[i] === ' ') {
      output += string[i];
      output += string[i + 1].toUpperCase();
      i++;
    } else {
      output += string[i].toLowerCase();
    }
  }
  return output;
}

// input: string
// output: string
// create storage for output: empty string
// change first char of string to uppercase, add it to output, then assign to output
// look at each char of string starting with the 2nd one, one at a time
// if value of string at i is strictly equal to ' ',
//    add value of string at i to output, and assign result to output
//    change value of string at (i plus 1) to uppercase, add it to output, then assign result to output
//    increment i by 1
// otherwise,
// change value of string at i to lowercase, add to output, then assign result to output
// return output
