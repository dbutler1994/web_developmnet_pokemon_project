
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


// BEGIN CONTROLLERS FOR USER LOGIN
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
            req.session.loggedIn = true;
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


// BEGIN CONTROLLERS FOR USER LOGOUT
// Controller for logging user out, destroying the session and redirecting to the home page
const getUserLogout = ( async (req, res) =>{
    await req.session.destroy();
    //console.log(req.session);

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
const postUpdateUsername = ( async (req, res) =>{   
    try {
        let endPoint = 'http://localhost:4000/account/settings/updateUsername';

        // redirect user to login page if not logged in
        if(typeof req.userId === 'undefined'){
            res.redirect("/account/login")
        };

        // get data from the request body
        const userId = req.userId;
        const username = req.body.username;
        const password = req.body.password;

        const config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }

        // send post request to the API to create a new account
        const response = await axios.post(endPoint, {
            userId,
            username,
            password
        }, config); 


        // handle response from the API for successful account creation
        if(response.status === 201){
            req.session.user.account.user_name = username;
            res.render('accountSettings', {success: 'Username updated successfully'})
        }

    } catch (error) {
        // handle response from the API for incorrect password
        if(error.response.status === 401){
            res.render('accountSettings', {error: error.response.data.error});
        }

        if(error.response.status === 409){
            res.render('accountSettings', {error: error.response.data.error});
        }

        // handle general error
        if(error.response.status === 500){
            res.status(500).json({ error: error.response.data.error });
        }
        
    }
});


// Controller for updating the email
const postUpdateEmail = ( async (req, res) =>{   
    try {
        let endPoint = 'http://localhost:4000/account/settings/updatePassword';

        // redirect user to login page if not logged in
        if(typeof req.userId === 'undefined'){
            res.redirect("/account/login")
        };

        // get data from the request body
        const userId = req.userId;
        const email = req.body.email;
        const password = req.body.password;

        const config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }

        // send post request to the API to create a new account
        const response = await axios.post(endPoint, {
            userId,
            email,
            password
        }, config); 


        // handle response from the API for successful account creation
        if(response.status === 201){
            req.session.user.account.email = email;
            res.render('accountSettings', {success: 'Email updated successfully'})
        }

    } catch (error) {
        // handle response from the API for incorrect password
        if(error.response.status === 401){
            res.render('accountSettings', {error: error.response.data.error});
        }

        if(error.response.status === 409){
            res.render('accountSettings', {error: error.response.data.error});
        }

        // handle general error
        if(error.response.status === 500){
            res.status(500).json({ error: error.response.data.error });
        }
        
    }
});

// Controller for updating the email
const postUpdatePassword = ( async (req, res) =>{   
    try {
        let endPoint = 'http://localhost:4000/account/settings/updatePassword';

        // redirect user to login page if not logged in
        if(typeof req.userId === 'undefined'){
            res.redirect("/account/login")
        };

        // get data from the request body
        const userId = req.userId;
        const newPassword = req.body.newPassword;
        const currentPassword = req.body.password;

        const config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }

        // send post request to the API to create a new account
        const response = await axios.post(endPoint, {
            userId,
            newPassword,
            currentPassword
        }, config); 


        // handle response from the API for successful account creation
        if(response.status === 201){
            res.render('accountSettings', {success: 'Password updated successfully'})
        }

    } catch (error) {
        // handle response from the API for incorrect password
        if(error.response.status === 401){
            res.render('accountSettings', {error: error.response.data.error});
        }

        if(error.response.status === 409){
            res.render('accountSettings', {error: error.response.data.error});
        }

        // handle general error
        if(error.response.status === 500){
            res.status(500).json({ error: error.response.data.error });
        }
        
    }
});


// Controller for updating the email
const postCloseAccount = ( async (req, res) =>{   
    try {
        let endPoint = 'http://localhost:4000/account/settings/closeAccount';

        // redirect user to login page if not logged in
        if(typeof req.userId === 'undefined'){
            res.redirect("/account/login")
        };

        // get data from the request body
        const userId = req.userId;
        const password = req.body.password;


        const config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }

        // send post request to the API to create a new account
        const response = await axios.post(endPoint, {
            userId,
            password
        }, config); 

        console.log('just before redirecting to logout');
        console.log(response);
        // destroy the session and redirect to the home page
        if(response.status === 200){
        
            res.redirect('/account/logout');
        }
        console.log('just after redirecting to logout');

    } catch (error) {
        // handle response from the API for incorrect password
        if(error.response.status === 401){
            res.render('accountSettings', {error: error.response.data.error});
        }

        if(error.response.status === 409){
            res.render('accountSettings', {error: error.response.data.error});
        }

        // handle general error
        if(error.response.status === 500){
            res.status(500).json({ error: error.response.data.error });
        }
        
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