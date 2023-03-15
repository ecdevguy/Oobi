const radios = document.querySelectorAll('#form .select input[type="radio"] + label');
radios.forEach((radio) => {
  radio.addEventListener('click', () => {
      radio.parentNode.previousElementSibling.textContent = radio.textContent;
      radio.parentNode.parentNode.parentNode.classList.remove('error');
  });
});
const nameInput = document.querySelector('#name');
nameInput.addEventListener('keyup', () => {
    if (nameInput.classList.contains('error') && nameInput.nodeValue != '') {
        nameInput.classList.remove('error');
    }
});