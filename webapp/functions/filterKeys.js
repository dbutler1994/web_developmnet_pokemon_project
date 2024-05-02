const { FILTER_PREFIX } = require("../config/config");

// Centralised list of the filter keys used in the application to filter the cards 
const filterKeys = {
  categoryId: `${FILTER_PREFIX}categoryId`,
  nameString: `${FILTER_PREFIX}name`,
  energyTypeId: `${FILTER_PREFIX}energyTypeId`,
  rarityId: `${FILTER_PREFIX}rarityId`,
  evolutionStageId: `${FILTER_PREFIX}evolutionStageId`,
  illustrator: `${FILTER_PREFIX}illustrator`,
  weaknessId: `${FILTER_PREFIX}weaknessId`,
  resistanceId: `${FILTER_PREFIX}resistanceId`
};


module.exports ={
    filterKeys
}