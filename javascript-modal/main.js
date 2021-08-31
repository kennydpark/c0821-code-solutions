var openModal = document.querySelector('.open-modal');
var modalFull = document.querySelector('.modal-full');
var modalWindow = document.querySelector('.column');
var modalNo = document.querySelector('.modal-no');
var text = document.querySelector('.text-no');

openModal.addEventListener('click', function (event) {
  modalFull.className = 'modal-full on';
  modalNo.className = 'modal-no button-on';
  text.className = 'text-no white button-on';
  modalWindow.className = 'column modal-window-on';
});

modalNo.addEventListener('click', modalClick);

function modalClick(event) {
  modalFull.className = 'modal-full off';
  modalNo.className = 'modal-no button-off';
  text.className = 'text-no white button-off';
  modalWindow.className = 'column modal-window-off';
}
