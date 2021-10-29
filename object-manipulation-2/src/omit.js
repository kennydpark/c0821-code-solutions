/* exported omit */

function omit(source, keys) {
  var output = {};
  for (var key in source) {
    if (keys.includes(key) === false) {
      output[key] = source[key];
    }
  }
  return output;
}

// input: an object, 'source'
// output: an array, 'keys'
// create storage for an empty object, 'output'
// loop through the keys in 'source'
//    if 'keys' array does not include the key,
//        add the property to 'output'
// return 'output'
