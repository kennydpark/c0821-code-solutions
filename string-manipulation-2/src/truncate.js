/* exported truncate */
function truncate(length, string) {
  var output = '';
  if (string === '') {
    return '...';
  }
  for (var i = 0; i < length; i++) {
    if (length <= string.length) {
      output += string[i];
    } else if (length > string.length) {
      length = string.length;
      output += string[i];
    }
  }
  return output + '...';
}

// input: length(number), string
// output: string
// create storage for output, which is empty string
// look at each char one at a time, if var i is less than the value of length param
// if length is greater than or equal to the length of the string,
//    add the value of string at i to output
//    otherwise, if length is greater than the length of the string,
//        update length to equal the length of the string.
//        look at each char one at a time, if the var i is less than the value of current length
//            add the value of string at i to output
// return output concatenated with '...'
