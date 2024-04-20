// create object with set information
const createSetObject = (data) => {
    return {
        id: data.set_id,
        name: data.release_set_name,
        code: data.set_code,
        total_cards: data.set_total_cards,
        release_date: data.release_date,
        icon_url: data.set_logo_url
    };
};


module.exports = {
    createSetObject
};