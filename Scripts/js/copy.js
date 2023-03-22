// For all copy buttons
const copyBtns = document.querySelectorAll('.copyBtn');
copyBtns.forEach((btn) => {
    let textarea = btn.parentElement.previousElementSibling;
    btn.addEventListener('click', () => {
        // Select the text field
        textarea.focus();
        textarea.select();
        // Copy the text
        document.execCommand("copy");
        btn.textContent = "Copied!"
        setTimeout(function () {
            window.getSelection().removeAllRanges();
            btn.textContent = "Copy";
        }, 3000)
    });
    textarea.addEventListener('click', () => {
        // Select the text field
        textarea.focus();
        textarea.select();
        // Copy the text
        document.execCommand("copy");
        btn.textContent = "Copied!"
        setTimeout(function () {
            window.getSelection().removeAllRanges();
            btn.textContent = "Copy";
        }, 3000)
    });
});