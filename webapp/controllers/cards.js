const axios = require('axios');

// controller when the user wants to get all cards
const getAllCards = ((req, res) =>{
    let endPoint = 'http://localhost:4000/cards'
    
    axios.get(endPoint).then((response)=>{
        let cardData = response.data;
        res.render('cardGrid', {cards: cardData});
    
    });  
})


const getCardById = ((req, res) =>{
    let cardId = req.params.id;
    let endPoint = `http://localhost:4000/cards/${cardId}`;
    
    axios.get(endPoint).then((response)=>{
        let cardData = response.data;
        console.log(cardData);
        res.render('singleCard', {card: cardData});
    });


    
})


module.exports ={
    getAllCards,
    getCardById
}