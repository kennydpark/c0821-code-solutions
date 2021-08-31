/* exported lastChars */
function lastChars(length, string) {
  var output = '';
  for (var i = 0; i < string.length; i++) {
    if (i < (string.length - length)) {
      continue;
    } else {
      output += string[i];
    }
  }
  return output;
}

// input: length(number), string
// output: string
// create storage for output: empty string
// look at each char in string one at a time
// if value of i is less than the length of string subtracted by length,
//    continue
//    otherwise,
//        add value of string at i to output, then assign result to output
// return output
