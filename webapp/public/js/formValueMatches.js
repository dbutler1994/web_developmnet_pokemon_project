// Function to validate if two input fields have the same value
// Will attempt to update a target element with a custom validation message
// returns boolean values
const valueMatches = (inputElement1ID, inputElement2ID, validationElement, validationMessage) =>{
    var element1Value = document.getElementById(inputElement1ID).value.trim();
    var element2Value = document.getElementById(inputElement2ID).value.trim();
    var element2 = document.getElementById(inputElement2ID);
    var validationMessageElement = document.getElementById(validationElement);

    if (element1Value === element2Value) {
        validationMessageElement.innerHTML = '';
        element2.setCustomValidity('');
        return true;
    } else {
        validationMessageElement.innerHTML = validationMessage ;
        element2.setCustomValidity('invalid');
        return false;
    }
}
