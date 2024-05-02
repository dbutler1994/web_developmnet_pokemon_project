// functio to update the heart colour and opacity of the image in the card grid
// also sends a post request to update the wishlist in the database for the specific card and user combo
const toggleHeartColour = (buttonId, cardGridImage, inWishlist) => {
    // Get the heart button
    const heartButton = document.getElementById(buttonId);
    const cardImage = document.getElementById(cardGridImage);

    if (heartButton) {
        // search for the icon by looking for the i tag
        const heartIcon = heartButton.querySelector('i');

        // determine whether to call add or remove route based on heart colour
        const rotueToCall = (heartIcon.style.color === 'red' ? 'remove' : 'add'); 
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

        // Make AJAX POST request to update wishlist
        const cardId = buttonId.replace('heartButton', '');
        

        $.ajax({
            url: `/wishlist/${rotueToCall}`, // enpdoint to update wishlist
            type: 'POST',
            data: { cardId: cardId},
            success: (response) => {
            },
            error: (xhr, status, error) => {
             }
        });

    }
};