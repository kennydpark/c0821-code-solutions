/* exported invert */
function invert(source) {
  var output = {};
  for (var key in source) {
    output[source[key]] = key;
  }
  return output;
}

// input: object
// output: object
// create storage for output, an empty object
// look at each property key in the input object
//    assign the property key as the value of the input object's property key and add it to output
// return output
