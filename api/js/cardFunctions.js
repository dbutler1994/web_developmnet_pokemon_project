const { BASE_IMAGE_URL } = require("../config/config");

// checks if an attack with the same name already exists in an array
const findExistingAttack = (attackArray, attackName) => {
    return attackArray.find(attack => attack.attack_name === attackName);
};

// create and return a new attack object
const formatNewAttack = (currentRow) => {
    return {
        attack_name: currentRow.attack_name,
        description: currentRow.description,
        damage: currentRow.damage,
        energies: [{
            type: currentRow.energy_type,
            icon_url: currentRow.icon_url,
            amount: currentRow.amount
        }]
    };
};

// updates the energies array of an existing attack to include the additional energy cost
const updateExistingAttack = (existingAttack, currentRow) => {
    existingAttack.energies.push({
        type: currentRow.energy_type,
        icon_url: currentRow.icon_url,
        amount: currentRow.amount
    });
};

// formats card attacks from the database to create attack objects in the desired format
const formatCardAttacks = (cardAttacks) => {
    return cardAttacks.reduce((attackArray, currentRow) => {
        const existingAttack = findExistingAttack(attackArray, currentRow.attack_name);

        if (existingAttack) {
            updateExistingAttack(existingAttack, currentRow); // attack exists so add new energy cost
        } else {
            attackArray.push(formatNewAttack(currentRow)); // attack does not exist in array so create new attack object
        }

        return attackArray;
    }, []); // initialise attack array as empty array
};


// create URL to access card images
const createCardURL = (expansion_api_id, release_set_api_id, card_number, image_quality) =>{
    // specify base URL and add arguments to create full URL
    let imageURL = `${BASE_IMAGE_URL}/${expansion_api_id}/${release_set_api_id}/${card_number}/${image_quality}.webp`;

    return imageURL;
}


// format set infromation so that it is its own object
const formatSetInformation = (setName, setCode, totalCards) => {
    return{
        set_name: setName,
        set_code: setCode,
        total_cards: totalCards
    }
};

// format rarity infromation so that it is its own object
const formatRarityInformation = (rarityId, rarityName, rarityIconURL) => {
    return{
        id: rarityId,
        name: rarityName,
        icon_url: rarityIconURL
    }
};

// format category information so that it is its own object
const formatCategoryInformation = (categoryId,categoryName) => {
    return{
        id : categoryId,
        name: categoryName
    }
};

// format evolution information so that it is its own object
const formatEvolutionInformation = (evolutionStageId, evolutionStageName, evolves_from) => {
    return{
        evolution_stage_id : evolutionStageId,
        evolution_stage_name : evolutionStageName,
        evolves_from: evolves_from
    }
};


module.exports = {
    formatCardAttacks, 
    createCardURL, 
    formatSetInformation, 
    formatRarityInformation,
    formatCategoryInformation,
    formatEvolutionInformation
};