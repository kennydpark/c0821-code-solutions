/* exported removeTail */

// function removeTail(list) {
//   // let current = list;
//   // while (current.data) {
//   //   current = current.next;
//   //   if (current.next === null) {
//   //     return current;
//   //   }
//   // }
// }

//
function removeTail(list) {
  if (list.next === null) return;
  let prev = list;
  let next = list.next;
  while (next.next != null) {
    prev = next;
    next = next.next;
  }
  prev.next = null;
  return list;
}
