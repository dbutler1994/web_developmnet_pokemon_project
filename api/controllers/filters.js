const filtersModel = require('../models/filters');
const bcrypt = require('bcrypt');


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
        // send errors
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};




module.exports = {
    getFilterOptions
};
