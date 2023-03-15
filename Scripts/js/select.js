const radios = document.querySelectorAll('#form .select input[type="radio"] + label');
radios.forEach((radio) => {
  radio.addEventListener('click', () => {
      radio.parentNode.previousElementSibling.textContent = radio.textContent;
  });
});