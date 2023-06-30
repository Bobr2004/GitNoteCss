function copyFrom(src) {
    return function () {
        let codeBlock = this.parentNode;
        let commandText = codeBlock.querySelector(src).innerText;

        let tempInput = document.createElement('input');
        tempInput.value = commandText;
        document.body.appendChild(tempInput);

        tempInput.select();
        document.execCommand('copy');

        document.body.removeChild(tempInput);
    }
}

const copyButtons = document.querySelectorAll('.block__code-copy');
copyButtons.forEach( button => button.addEventListener('click',copyFrom('.block__code-command')))