const setFunctions = require('./setFunctions');

// checks if an expansion with the same id already exists in the array
const findExistingExpansion = (expansionArray, expansionId) => {
    return expansionArray.find(expansion => expansion.id === expansionId);
};

// create and return a new expansion object
const formatNewExpansion = (currentRow, createSet) => {
    return {
        id: currentRow.expansion_id,
        name: currentRow.expansion_name,
        sets: createSet ? [setFunctions.createSetObject(currentRow)] : undefined // only create set object if createSet is true
    };
};

// updates the sets array of an existing expansion to include the new set information
const updateExistingExpansion = (existingExpansion, currentRow) => {
    existingExpansion.sets.push(setFunctions.createSetObject(currentRow));
};

// format data so that each expansion is an object with a arrays containing all of its sets 
const setsByExpansion = (expansionSetData) =>{
    return expansionSetData.reduce((expansionArray, currentRow) => {

        // check if current expansion already exists in the array
        const existingExpansion = findExistingExpansion(expansionArray, currentRow.expansion_id);

        if (existingExpansion){
            updateExistingExpansion(existingExpansion, currentRow); //expansion exists so add new set to it
        } else {
            expansionArray.push(formatNewExpansion(currentRow, true)); // expansion does not exist in array so create new expansion object
        }

        return expansionArray; // return arrat into callback function

      }, []); // initialise as an empty array
}


module.exports = {
    setsByExpansion,
    formatNewExpansion
};