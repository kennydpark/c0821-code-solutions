/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

// function insertNext(list, value) {
//   const second = list.next;
//   list.next.data = value;
//   list.next.next = second;
// }

function insertNext(list, value) {
  const next = list.next;
  list.next = new LinkedList(value);
  if (next != null) {
    list.next.next = next;
  }
}
