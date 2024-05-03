
const axios = require('axios');
const { API_ROOT_URL } = require('../config/config');


// BEGIN CONTROLLERS FOR CREATE ACCOUNT
// controller for rendering the create account page to the user
const getCreateAccount = ((req, res) =>{
    res.render("account", {content: "createAccount"});
})

// controller for creating a new account
const postCreateAccount = ( async (req, res, next) =>{   
    try {
        let endPoint = `${API_ROOT_URL}/account/createAccount`;
        const config = {headers: res.customHeaders};

        // get data from the request body
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

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

        next(error);
        
    }
});


// BEGIN CONTROLLERS FOR USER LOGIN
// Controller for rendering the login page to the user
const getUserLogin = ((req, res) =>{
    res.render("account", {content: "login"});
});

// Controller for logging the user into the website
const postUserLogin = ( async (req, res, next) =>{

    try{
        let endPoint = `${API_ROOT_URL}/account/loginAccount`;
        const config = {headers: res.customHeaders};

        // get data from the request body
        const email = req.body.email;
        const password = req.body.password; 
    
        // send post request to the API to check user credentials
        const response = await axios.post(endPoint, {
            email,
            password
        }, config);

        // handle response from the API for successful account login (creastes a session for the user and redirects to the home page)
        if(response.status === 200){
            req.session.user = response.data;
            req.session.loggedIn = true;
            res.redirect('/');
        }

    } catch(error){
        // handle response from the API for unauthorized user/incorrect credentials
        if(error.response.status === 401){
            res.render('account', {content: 'login', error: error.response.data.error});
        }
        next(error);
        
    }
});


// BEGIN CONTROLLERS FOR USER LOGOUT
// Controller for logging user out, destroying the session and redirecting to the home page
const getUserLogout = ( async (req, res, next) =>{
    await req.session.destroy();

    res.redirect("/");
});


// controller to get user settings
const getAccountSettings = ((req, res) =>{
    
    // redicrect user to login page if not logged in
    if(typeof req.userId === 'undefined'){
        res.redirect("/account/login")
    };
    
    // user is logged in, render the account settings page
    res.render("accountSettings", {
        user: req.session.user});
});

// Controller for updating the username
const postUpdateUsername = ( async (req, res, next) =>{   
    try {
        let endPoint = `${API_ROOT_URL}/account/settings/updateUsername`;
        const config = {headers: res.customHeaders};

        // redirect user to login page if not logged in
        if(typeof req.userId === 'undefined'){
            res.redirect("/account/login")
        };

        // get data from the request body
        const userId = req.userId;
        const username = req.body.username;
        const password = req.body.password;

        // send post request to the API to update username
        const response = await axios.post(endPoint, {
            userId,
            username,
            password
        }, config); 

        // handle response from the API for successful username update
        if(response.status === 201){
            req.session.user.account.user_name = username;
            res.render('accountSettings', {success: 'Username updated successfully'})
        }

    } catch (error) {
        // handle response from the API for incorrect password
        if(error.response.status === 401){
            res.render('accountSettings', {error: error.response.data.error});
        }

        // handle response from the API for incorrect username
        if(error.response.status === 409){
            res.render('accountSettings', {error: error.response.data.error});
        }

        next(error);
        
    }
});


// Controller for updating the email
const postUpdateEmail = ( async (req, res, next) =>{   
    try {
        // set the endpoint and the custom headers
        let endPoint = `${API_ROOT_URL}/account/settings/updateEmail`;
        const config = {headers: res.customHeaders};

        // redirect user to login page if not logged in
        if(typeof req.userId === 'undefined'){
            res.redirect("/account/login")
        };

        // get data from the request body
        const userId = req.userId;
        const email = req.body.email;
        const password = req.body.password;

        // send post request to the API to update email
        const response = await axios.post(endPoint, {
            userId,
            email,
            password
        }, config); 

        // handle response from the API for successful email update
        // update sessions user email and render the account settings page
        if(response.status === 201){
            req.session.user.account.email = email;
            res.render('accountSettings', {success: 'Email updated successfully'})
        }

    } catch (error) {
        // handle response from the API for incorrect password
        if(error.response.status === 401){
            res.render('accountSettings', {error: error.response.data.error});
        }

        // handle response from the API for incorrect email
        if(error.response.status === 409){
            res.render('accountSettings', {error: error.response.data.error});
        }

        next(error);
        
    }
});

// Controller for updating the password
const postUpdatePassword = ( async (req, res, next) =>{   
    try {
        // set the endpoint and the custom headers
        let endPoint = `${API_ROOT_URL}/account/settings/updatePassword`;
        const config = {headers: res.customHeaders};

        // redirect user to login page if not logged in
        if(typeof req.userId === 'undefined'){
            res.redirect("/account/login")
        };

        // get data from the request body
        const userId = req.userId;
        const newPassword = req.body.newPassword;
        const currentPassword = req.body.password;

        // send post request to the API to update password
        const response = await axios.post(endPoint, {
            userId,
            newPassword,
            currentPassword
        }, config); 

        // handle response from the API for successful password update
        if(response.status === 201){
            res.render('accountSettings', {success: 'Password updated successfully'})
        }

    } catch (error) {
        // handle response from the API for incorrect password
        if(error.response.status === 401){
            res.render('accountSettings', {error: error.response.data.error});
        }

        next(error);
        
    }
});


// Controller for closing the account
const postCloseAccount = ( async (req, res, next) =>{   
    try {
        // set the endpoint and the custom headers
        let endPoint = `${API_ROOT_URL}/account/settings/closeAccount`;
        const config = {headers: res.customHeaders};

        // redirect user to login page if not logged in
        if(typeof req.userId === 'undefined'){
            res.redirect("/account/login")
        };

        // get data from the request body
        const userId = req.userId;
        const password = req.body.password;

        // send post request to the API to create a new account
        const response = await axios.post(endPoint, {
            userId,
            password
        }, config); 

        // destroy the session and redirect to the home page
        if(response.status === 200){
        
            res.redirect('/account/logout');
        }


    } catch (error) {
        // handle response from the API for incorrect password
        if(error.response.status === 401){
            res.render('accountSettings', {error: error.response.data.error});
        }

        if(error.response.status === 409){
            res.render('accountSettings', {error: error.response.data.error});
        }

        next(error);
        
    }
});


module.exports ={
    getCreateAccount,
    postCreateAccount,
    getUserLogin,
    postUserLogin,
    getUserLogout,
    getAccountSettings,
    postUpdateUsername,
    postUpdateEmail,
    postUpdatePassword,
    postCloseAccount
}