/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var output = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      output += string[secondIndex];
    } else if (i === secondIndex) {
      output += string[firstIndex];
    } else {
      output += string[i];
    }
  }
  return output;
}

// input: number, number, string
// output: string
// create storage for output: empty string
// look at each char of string one at a time
//    if 'i' strictly equals value of firstIndex,
//        add value of string at secondIndex to output
//    otherwise, if 'i' strictly equals secondIndex,
//        add value of string at firstIndex to output
//    otherwise,
//        add value of string at 'i' to output
// return output
