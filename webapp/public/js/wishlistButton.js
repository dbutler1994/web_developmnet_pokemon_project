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
        const cardId = buttonId.replace('heartButton', ''); // get card ID from button ID
        

        $.ajax({
            url: `/wishlist/${rotueToCall}`, // enpdoint to update wishlist
            type: 'POST',
            data: { cardId: cardId},
            success: (response) => {
                console.log('Wishlist updated successfully:', response);
            },
            error: (xhr, status, error) => {
                console.error('Error updating wishlist:', error);
             }
        });

    }
};