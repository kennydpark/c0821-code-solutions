/* exported updateNext */

function updateNext(list, value) {
  if (list.next === null) {
    return;
  }
  if (list.next.next !== undefined) {
    list.next.data = value;
  }
}
