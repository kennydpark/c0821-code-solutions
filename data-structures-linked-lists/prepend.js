/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

// function prepend(list, value) {
//   list.next = list.data;
//   list.data = value;
// }

//
function prepend(list, value) {
  const newList = new LinkedList(value);
  newList.next = list;
  return newList;
}
