// wishlistButton.js

const increaseCounter = (targetId, cardId, collectionId) => {
    // Get the target to increase
    const targetToIncrease = document.getElementById(targetId);

    // increase the target element by 1
    if (targetToIncrease) {
        targetToIncrease.textContent = parseInt(targetToIncrease.textContent) + 1;
        postUpdateNumberOfCopies(cardId, targetToIncrease.textContent, collectionId);
    }
};


const decreaseCounter = (targetId, cardId, collectionId) => {
    // Get the target to increase
    const targetToDecrease = document.getElementById(targetId);

    // decrease the target element by 1. Floor at 0.
    if (targetToDecrease) {
        if(targetToDecrease.textContent > 0){
            targetToDecrease.textContent = parseInt(targetToDecrease.textContent) - 1;
            postUpdateNumberOfCopies(cardId, targetToDecrease.textContent, collectionId);
        }
        
    }
};

const postUpdateNumberOfCopies = (cardId, numberOfCopies, collectionId) => {
    // Make AJAX POST request to update wishlist
    $.ajax({
        url: `/collections/updateRecord`,
        type: 'POST',
        data: { 
            cardId: cardId, 
            copies: numberOfCopies,
            collectionId: collectionId,
            notes: null
        },
        success: (response) => {
            console.log('Collection entry updated successfully:', response);
        },
        error: (xhr, status, error) => {
            console.error('Error updating Collection entry:', error);
        }
    });
}