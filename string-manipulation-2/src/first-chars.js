/* exported firstChars */
function firstChars(length, string) {
  var output = '';
  if (string === '') {
    output += '';
  } else if (length > string.length) {
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
// look at each char of string one at a time
//    if length is less than or equal to length of string,
//        add value of string at i to output and assign result to output
//    otherwise, if string strictly equals '',
//        add '' to output and assign result to output
//    othwerise, if length is greater than length of string,
//        assign length of string to length
//        add value of string at i to output and assign result to output
// return output
