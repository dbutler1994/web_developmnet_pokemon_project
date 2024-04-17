const axios = require('axios');

// Define Controllers
const getAllCards = ((req, res) =>{
    let endPoint = 'http://localhost:4000/cards'
    
    axios.get(endPoint).then((response)=>{
        let cardData = response.data;
        console.log(cardData);
        res.render('cardGrid', {cards: cardData});
    
    });


    
})


module.exports ={
    getAllCards
}