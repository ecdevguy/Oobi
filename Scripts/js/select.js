const radios = document.querySelectorAll('#form .select input[type="radio"] + label');
radios.forEach((radio) => {
    radio.addEventListener('click', () => {
        const field = radio.parentNode.parentNode.parentNode;
        radio.parentNode.previousElementSibling.textContent = radio.textContent;
        field.classList.remove('error');
        field.nextSibling.remove();
    });
});
const nameInput = document.querySelector('#name');
nameInput.addEventListener('keyup', () => {
    if (nameInput.classList.contains('error') && nameInput.nodeValue != '') {
        nameInput.classList.remove('error');
        nameInput.nextSibling.remove();
    }
});
const acceptTermsInput = document.querySelector('#acceptTerms');
acceptTermsInput.nextSibling.addEventListener('click', () => {
    acceptTermsInput.nextSibling.nextSibling.remove();
});