    // invoke post reques to update the record in the database or create a new one if required.
    const submitNote = (cardId, collectionId, note) => {
        $.ajax({
        url: `/collections/updateRecord`,
        type: 'POST',
        data: { 
            cardId:  cardId ,
            collectionId: collectionId,
            copies: null,
            notes: note
        },
        success: (response) => {
            console.log('Collection entry updated successfully:', response);
        },
        error: (xhr, status, error) => {
            console.error('Error updating Collection entry:', error);
        }
    });

    };