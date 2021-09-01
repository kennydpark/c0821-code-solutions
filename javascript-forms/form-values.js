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
