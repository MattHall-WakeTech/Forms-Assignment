const form = document.getElementById("myForm");
const inputField = document.getElementById("inputField");

form.addEventListener("submit", function(event) {
    const value = inputField.value;

    const regex = /^[a-zA-Z0-9]+$/;

    if (!regex.test(value)) {
        event.preventDefault();
        alert("Error: Input must be alphanumeric :( ");
    } else {
        event.preventDefault();
        alert("Success! Form sumbitted correctly.");
    }
});