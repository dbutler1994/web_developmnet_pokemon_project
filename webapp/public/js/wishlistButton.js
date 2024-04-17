
const toggleHeartColour = (buttonId) => {
    // Get the heart button
    const heartButton = document.getElementById(buttonId);

    if (heartButton) {
        // search for the icon by looking for the i tag
        const heartIcon = heartButton.querySelector('i');

        // change colour if found using  tenary if statement
        if (heartIcon) {
            heartIcon.style.color = (heartIcon.style.color === 'red' ? 'grey' : 'red');
        }
    }
};