/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

// function append(list, value) {
//   let current = list;
//   while (current) {
//     if (current.next === null) {
//       current.next = value;
//     }
//     current = current.next;
//   }
// }

//
function append(list, value) {
  const head = list;
  while (list.next) list = list.next;
  list.next = new LinkedList(value);
  return head;
}
