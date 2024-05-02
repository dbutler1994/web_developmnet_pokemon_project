    // initiates post reques to update the record in the database or create a new one in te default collection if required.
    // calls the collections/updateRecord route
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
        },
        error: (xhr, status, error) => {
        }
    });

    };