

const addremove = (targetAction, targetCollection, card_id,  targetNote) => {
    
    console.log('note:', note);
    console.log(hello === "add")
    console.log('targetId:', hello);
    console.log('collection:', collection);
   
};


const addRemoveCardFromCollection = (targetAction, targetCollection, targetNote, cardId) => {
    // get values from elements
    const action = document.getElementById(targetAction).value;
    const collectionId = document.getElementById(targetCollection).value;
    const note = document.getElementById(targetNote).value;
    const numberOfCopies = action === 'add' ? 1 : null;

    console.log('action:', action);
    console.log('collectionId:', collectionId);
    console.log('note:', note);
    console.log('numberOfCopies:', numberOfCopies);
    console.log('cardId:', cardId);

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
            console.log('Collection entry updated successfully:', response);
        },
        error: (xhr, status, error) => {
            console.error('Error updating Collection entry:', error);
        }
    });
}