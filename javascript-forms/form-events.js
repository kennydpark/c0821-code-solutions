function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name:', event.target.name);
}

function handleInput(event) {
  console.log('value of name:', event.target.value);
}

var userName = document.querySelector('#user-name');
var userEmail = document.querySelector('#user-email');
var textArea = document.querySelector('#user-message');

userName.addEventListener('focus', handleFocus);
userName.addEventListener('blur', handleBlur);
userName.addEventListener('input', handleInput);

userEmail.addEventListener('focus', handleFocus);
userEmail.addEventListener('blur', handleBlur);
userEmail.addEventListener('input', handleInput);

textArea.addEventListener('focus', handleFocus);
textArea.addEventListener('blur', handleBlur);
textArea.addEventListener('input', handleInput);

var contactForm = document.querySelector('form');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var output = {};
  var nameValue = contactForm.elements.name.value;
  var emailValue = contactForm.elements.email.value;
  var textAreaValue = contactForm.elements.message.value;
  output.name = nameValue;
  output.email = emailValue;
  output.message = textAreaValue;
  console.log(output);
  document.querySelector('#contact-form').reset();
});
