const filtersModel = require('../models/filters');

// get all filter options from the database. Calling functions to get filter values and construct the response
const getFilterOptions = async (req, res) => {
    try {

        const jsonResponse = {
            energyTypes: await filtersModel.getEnergyTypes(),
            evolutionStages: await filtersModel.getEvolutionStages(),
            rarityTypes: await filtersModel.getRarityTypes(),
            cardCategories: await filtersModel.getCardCategories()
        };

        // send a success response
        res.status(200).json(jsonResponse);

    } catch (error) {
        console.error("Error getting sets:", error);
        res.status(500).json({error : "Internal Server Error"}  );
    }
};




module.exports = {
    getFilterOptions
};
