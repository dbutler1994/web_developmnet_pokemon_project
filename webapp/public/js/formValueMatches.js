// Function to validate if two input fields have the same value
// Will attempt to update a target element with a custom validation message
// returns boolean values
// used as bootstrap validation does not seem to support checking if two fields have the same value
const valueMatches = (inputElement1ID, inputElement2ID, validationElement, validationMessage) =>{
    let element1Value = document.getElementById(inputElement1ID).value.trim();
    let element2Value = document.getElementById(inputElement2ID).value.trim();
    let element2 = document.getElementById(inputElement2ID);
    let validationMessageElement = document.getElementById(validationElement);

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
