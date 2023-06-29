function copyText() {
    // Get the text from the <p> element
    var text = document.querySelector(".block__code-command").innerText;

    // Create a temporary input element
    var tempInput = document.createElement("input");

    // Set the value of the input element to the text
    tempInput.value = text;

    // Append the input element to the document
    document.body.appendChild(tempInput);

    // Select the text in the input element
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);

}
