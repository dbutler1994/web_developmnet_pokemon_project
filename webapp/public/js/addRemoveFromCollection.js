// function that takes elements as arguments and then extracts the values from them
// sends a post request to update the collection entry in the database for the specific card, collection and action (add or remove)
const addRemoveCardFromCollection = (targetAction, targetCollection, cardId) => {
    // get values from elements
    const action = document.getElementById(targetAction).value;
    const collectionId = document.getElementById(targetCollection).value;

    const numberOfCopies = action === 'add' ? 1 : null;

    console.log(`Card ID: ${cardId}, Collection ID: ${collectionId}, Action: ${action}`);

    // send request to server
    $.ajax({
        url: `/collections/updateRecord/${action}`,
        type: 'POST',
        data: { 
            cardId: cardId, 
            copies: numberOfCopies,
            collectionId: collectionId,
            notes: null
        },
        success: (response) => {
            alert(`Card successfully ${action}ed  `);
        },
        error: (xhr, status, error) => {
            alert(`Error ${action}ing card. Card may already be in collection  / Not in collection`);
        }
    });
}