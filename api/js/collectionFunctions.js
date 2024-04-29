const formatCollectionsData = (collectedCards) => {
    return groupByCardId(collectedCards);
};


const groupByCardId = (collectedCards) => {
    // iterate through the collectedCards and accumulate them into a single object
    return collectedCards.reduce((groupedData, collectionEntry) => {

        // get current entry details and set the key for each entry in the object to the card_id
        const { card_id, is_default, ...otherDetails } = collectionEntry;
        const cardKey = `${card_id}`;

        // check if key exists in the object, if not create it with a blank array for default and custom collections 
        if (!groupedData[cardKey]) {
            groupedData[cardKey] = {
                defaultCollection: [],
                customCollections: []
            };
        }

        // if the current entry is a default collection, add it to the default collection array, otherwise add it to the custom collection array
        if (is_default === 1) {
            groupedData[cardKey].defaultCollection.push({ ...otherDetails });
        } else {
            groupedData[cardKey].customCollections.push({ ...otherDetails });
        }

        // we go again
        return groupedData;
    }, {});
};

module.exports = {
    formatCollectionsData
};