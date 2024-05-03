
// function to increase the text context of a target element by 1 and calls the postUpdateNumberOfCopies function to send POST request to update the collection entry in the database
const increaseCounter = (targetId, cardId, collectionId) => {
    // Get the target to increase
    const targetToIncrease = document.getElementById(targetId);

    // increase the target element by 1
    if (targetToIncrease) {
        targetToIncrease.textContent = parseInt(targetToIncrease.textContent) + 1;
        postUpdateNumberOfCopies(cardId, targetToIncrease.textContent, collectionId);
    }
};

// function to decrease the text context of a target element by 1 and calls the postUpdateNumberOfCopies function to send POST request to update the collection entry in the database
const decreaseCounter = (targetId, cardId, collectionId) => {
    // Get the target to increase
    const targetToDecrease = document.getElementById(targetId);

    // decrease the target element by 1. floor at 0.
    if (targetToDecrease) {
        if(targetToDecrease.textContent > 0){
            targetToDecrease.textContent = parseInt(targetToDecrease.textContent) - 1;
            postUpdateNumberOfCopies(cardId, targetToDecrease.textContent, collectionId);
        }
        
    }
};

// function to send a POST request to update the collection entry in the database calls the collections/updateRecord route
const postUpdateNumberOfCopies = (cardId, numberOfCopies, collectionId) => {
    // Make AJAX POST request to update wishlist
    $.ajax({
        url: `/collections/updateRecord`,
        type: 'POST',
        data: { 
            cardId: cardId, 
            copies: numberOfCopies,
            collectionId: collectionId,
            notes: null,
            action : "copies"
        },
        success: (response) => {
        },
        error: (xhr, status, error) => {
        }
    });
}