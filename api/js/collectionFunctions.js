// calls the groupByCardId function to group the collected cards by card_id and then separates them into default and custom collections
// for example if Charizard exists in 5 of the users collections, 3 of which are default and 2 are custom, the data will be formatted as follows:
// default collections: [{collection_id: 1, card_id: 6, is_default: 1, ...}, {collection_id: 2, card_id: 6, is_default: 1, ...}, {collection_id: 3, card_id: 6, is_default: 1, ...}]
// custom collections: [{collection_id: 4, card_id: 6, is_default: 0, ...}, {collection_id: 5, card_id: 6, is_default: 0, ...}]
const formatCollectionsData = (collectedCards) => {
    return groupByCardId(collectedCards);
};

// groups the collected cards by card_id and separates them into default and custom collections
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