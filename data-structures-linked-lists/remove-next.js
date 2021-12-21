/* exported removeNext */

function removeNext(list) {
  if (list.next === null) {
    return;
  }
  if (list.next.next !== undefined) {
    list.next = list.next.next;
  }
}
