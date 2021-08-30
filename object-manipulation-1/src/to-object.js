/* exported toObject */
function toObject(keyValuePair) {
  var output = {};
  var key = keyValuePair[0];
  var value = keyValuePair[1];
  output[key] = value;
  return output;
}

// input: array containing 2 elements: a string key and any other javascript value
// output: object with one property consisting of the passed keyValuePair
// create storage for an empty object
// create storage for the key, which is the first element in the passed array
// create storage for the value, which is the second element in the passed array
// add the key and value to the output
// return the output
