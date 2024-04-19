
const toggleHeartColour = (buttonId, cardGridImage) => {
    // Get the heart button
    const heartButton = document.getElementById(buttonId);
    const cardImage = document.getElementById(cardGridImage);

    if (heartButton) {
        // search for the icon by looking for the i tag
        const heartIcon = heartButton.querySelector('i');

        // change colour if found using  tenary if statement
        if (heartIcon) {
            heartIcon.style.color = (heartIcon.style.color === 'red' ? 'grey' : 'red');
        }

                    
        // remove or add opacity of the image if we have the image
        if(cardImage){
            if(cardImage.classList.contains('opacity-50')) {
                cardImage.classList.remove('opacity-50');
            } else {
                cardImage.classList.add('opacity-50');
            }
        }
    }
};