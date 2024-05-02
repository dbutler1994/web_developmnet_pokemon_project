const accountModel = require('../models/account');
const bcrypt = require('bcrypt');


const registerAccount = async (req, res) => {
    try {
        // get the user account details from the request
        const { firstName, lastName, username, email, password } = req.body;

        // check if username already exists and send a conflict response if it does
        const existingUser = await accountModel.getAccountByUserName(username);

        if (existingUser) {
            return res.status(409).json({ error: `Username: ${username} already exists` });
        }

        // check if email already exists and send a conflict response if it does
        const existingEmail = await accountModel.getAccountByEmail(email);
        if (existingEmail) {
            return res.status(409).json({ error: `Email: ${email} already exists` });
        }

        // hash the password using bcrypt, for better security
        const hashedPassword = await bcrypt.hash(password, 10);

        // create the new account in the database
        const result = await accountModel.createAccount( firstName, lastName, username, email, hashedPassword );

        // send a success response
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        // send errors
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


const loginAccount = async (req, res) => {
    
    try {
        const {email, password } = req.body;

        // attempt to log in the user
        const account = await accountModel.loginAccount( email, password );

        // return the user's account ID if login is successful
        res.status(200).json({ account: account });
    } catch (error) {

        // send errors. Send a unauthorized response if the email is not found or the password is incorrect        
        if (error.message === 'Email address not found. Please register first.' || error.message === 'Incorrect Password.') {
            res.status(401).json({ error: 'Invalid username or password' });
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};

const updateUsername = async (req, res) => {
    try{
        // get the user account details from the request
        const { userId, username, password } = req.body;

        // get the stored password from the database
        const storedPassword = await accountModel.getAccountPasswordById(userId);

        // check if username already exists and send a conflict response if it does
        const existingUser = await accountModel.getAccountByUserName(username);
        if (existingUser) {
            return res.status(409).json({ error: `Username: ${username} already exists` });
        }

        // check input password mataches the stored password
        const passwordMatch = await bcrypt.compare(password, storedPassword);


        if(passwordMatch){
            // update the username in the database
            const result = await accountModel.updateUsername(userId, username);

            if(result){
                // send a success response
                res.status(201).json({ message: 'Username updated successfully' });
            } else{
                res.status(500).json({ error: 'Problem updating record' });
            }
            
        } else{
            res.status(401).json({ error: 'Incorrect Password' });
        }

    } catch (error) {
        throw new Error(error.message);
    }
}


const updateEmail = async (req, res) => {
    try{
        // get the user account details from the request
        const { userId, email, password } = req.body;

        // get the stored password from the database
        const storedPassword = await accountModel.getAccountPasswordById(userId);

        // check if email already exists and send a conflict response if it does
        const existingEmail = await accountModel.getAccountByEmail(email);
        if (existingEmail) {
            return res.status(409).json({ error: `Email: ${email} already exists` });
        }

        // check input password mataches the stored password
        const passwordMatch = await bcrypt.compare(password, storedPassword);


        if(passwordMatch){
            // update the email in the database
            const result = await accountModel.updateEmail(userId, email);

            if(result){
                // send a success response
                res.status(201).json({ message: 'Email updated successfully' });
            } else{
                res.status(500).json({ error: 'Problem updating Email' });
            }
            
        } else{
            res.status(401).json({ error: 'Incorrect Password' });
        }

    } catch (error) {
        throw new Error(error.message);
    }
}

const updatePassword = async (req, res) => {
    try{
        // get the user account details from the request
        const { userId, newPassword, currentPassword } = req.body;

        // get the stored password from the database
        const storedPassword = await accountModel.getAccountPasswordById(userId);

        // check input password mataches the stored password
        const passwordMatch = await bcrypt.compare(currentPassword, storedPassword);


        if(passwordMatch){

            // hash the password using bcrypt, for better security
            const hashedPassword = await bcrypt.hash(newPassword, 10);

            // update the email in the database
            const result = await accountModel.updatePassword(userId, hashedPassword);

            if(result){
                // send a success response
                res.status(201).json({ message: 'Password updated successfully' });
            } else{
                res.status(500).json({ error: 'Problem updating Password' });
            }
            
        } else{
            res.status(401).json({ error: 'Incorrect Current Password' });
        }

    } catch (error) {
        throw new Error(error.message);
    }
}


const closeAccount = async (req, res) => {
    try{
        // get the user account details from the request
        const { userId, password } = req.body;

        // get the stored password from the database
        const storedPassword = await accountModel.getAccountPasswordById(userId);

        // check input password mataches the stored password
        const passwordMatch = await bcrypt.compare(password, storedPassword);


        if(passwordMatch){

            // update the email in the database
            const result = await accountModel.closeAccount(userId);

            if(result === true){
                // send a success response
                res.status(200).json({ message: 'Account closed successfully' });
            } else{
                res.status(500).json({ error: 'Problem closing account' });
            }
            
        } else{
            res.status(401).json({ error: 'Incorrect Current Password' });
        }

    } catch (error) {
        throw new Error(error.message);
    }
}



module.exports = {
    registerAccount,
    loginAccount,
    updateUsername,
    updateEmail,
    updatePassword,
    closeAccount
};
