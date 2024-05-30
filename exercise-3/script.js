const form = document.getElementById('contactForm');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const phoneInput = document.getElementById('phoneInput');
const messageInput = document.getElementById('messageInput');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  removeInvalidClasses();
  successMessage.textContent = '';

  
  const isNameEmpty = nameInput.value.trim() === '';
  const isEmailEmpty = emailInput.value.trim() === '';
  const isPhoneEmpty = phoneInput.value.trim() === '';
  const isMessageEmpty = messageInput.value.trim() === '';

 
  if (isNameEmpty) {
    nameInput.classList.add('invalid');
  }
  if (isEmailEmpty) {
    emailInput.classList.add('invalid');
  }
  if (isPhoneEmpty) {
    phoneInput.classList.add('invalid');
  }
  if (isMessageEmpty) {
    messageInput.classList.add('invalid');
  }

  
  if (!isNameEmpty && !isEmailEmpty && !isPhoneEmpty && !isMessageEmpty) {
    successMessage.textContent = 'Message sent successfully!';
  }
});

function removeInvalidClasses() {
  nameInput.classList.remove('invalid');
  emailInput.classList.remove('invalid');
  phoneInput.classList.remove('invalid');
  messageInput.classList.remove('invalid');
}