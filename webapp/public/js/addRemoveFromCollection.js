// function that takes elements as arguments and then extracts the values from them
// sends a post request to update the collection entry in the database for the specific card, collection and action (add or remove)
const addRemoveCardFromCollection = (targetAction, targetCollection, targetNote, cardId) => {
    // get values from elements
    const action = document.getElementById(targetAction).value;
    const collectionId = document.getElementById(targetCollection).value;
    const note = document.getElementById(targetNote).value;
    const numberOfCopies = action === 'add' ? 1 : null;

    // send request to server
    $.ajax({
        url: `/collections/updateRecord/${action}`,
        type: 'POST',
        data: { 
            cardId: cardId, 
            copies: numberOfCopies,
            collectionId: collectionId,
            notes: note
        },
        success: (response) => {
        },
        error: (xhr, status, error) => {
        }
    });
}