
const axios = require('axios');

// BEGIN CONTROLLERS FOR CREATE ACCOUNT
// Controller for rendering the create account page to the user
const getCreateAccount = ((req, res) =>{
    res.render("account", {content: "createAccount"});
})

// Controller for crtating a new account
const postCreateAccount = ( async (req, res) =>{   
    try {
        let endPoint = 'http://localhost:4000/account/createAccount';
        //console.log(endPoint);

        // get data from the request body
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        //console.log(firstName, lastName, username, email, password); 

        const config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }

        // send post request to the API to create a new account
        const response = await axios.post(endPoint, {
            firstName,
            lastName,
            username,
            email,
            password
        }, config);


        // handle response from the API for successful account creation
        if(response.status === 201){
            res.redirect('/account/login');
        }

    } catch (error) {
        // handle response from the API for duplicate name or email entered
        if(error.response.status === 409){
            res.render('account', {content: 'createAccount', error: error.response.data.error});
        }

        // handle general error
        if(error.response.status === 500){
            res.status(500).json({ error: 'Internal server error' });
        }
        
    }
});


// BEGIN CONTROLLERS FOR CREATE ACCOUNT
// Controller for rendering the login page to the user
const getUserLogin = ((req, res) =>{
    res.render("account", {content: "login"});
});

const postUserLogin = ( async (req, res) =>{

    try{
        let endPoint = 'http://localhost:4000/account/loginAccount';
        //console.log(endPoint);

        // get data from the request body
        const email = req.body.email;
        const password = req.body.password; 

        const config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }

    
        // send post request to the API to create a new account
        const response = await axios.post(endPoint, {
            email,
            password
        }, config);

        // handle response from the API for successful account creation
        if(response.status === 200){
            req.session.user = response.data;
            req.session.authorised = true;
            res.redirect('/');
        }

    } catch(error){
        // handle response from the API for duplicate name or email entered
        if(error.response.status === 401){
            res.render('account', {content: 'login', error: error.response.data.error});
        }
        // handle response from the API for duplicate name or email entered
        if(error.response.status === 500){
            res.status(500).json({ error: 'Internal server error' });
        }
        
    }
});


module.exports ={
    getCreateAccount,
    postCreateAccount,
    getUserLogin,
    postUserLogin
}