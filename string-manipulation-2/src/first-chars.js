/* exported firstChars */
function firstChars(length, string) {
  var output = '';
  if (length > string.length) {
    length = string.length;
  }
  for (var i = 0; i < length; i++) {
    if (length <= string.length) {
      output += string[i];
    }
  }
  return output;
}

// intput: length (number), string
// output string
// create storage for output: empty string
// if 'length' is greater than the length of 'string',
// set value of 'length' to the length of 'string'.
// look at each char of string one at a time
//    if length is less than or equal to the length of string,
//        add value of string at i to output and assign result to output
// return output
