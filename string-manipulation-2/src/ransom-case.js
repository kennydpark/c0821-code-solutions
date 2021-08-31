/* exported ransomCase */
function ransomCase(string) {
  var output = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      output += string[i].toLowerCase();
    } else {
      output += string[i].toUpperCase();
    }
  }
  return output;
}

// input: string
// output: string
// create storage for output: empty string
// look at each char in string one by one
//    if i is even,
//        change value of string at i to lowercase, add it to output, then assign to output
//    otherwise,
//        change value of string at i to uppercase, add it to output, then assign to output
// return output
