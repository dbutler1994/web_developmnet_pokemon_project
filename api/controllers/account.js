const accountModel = require('../models/account');
const bcrypt = require('bcrypt');


registerAccount = async (req, res) => {
    try {

        //console.log(req.body);
        //console.log(req.body.firstName);

        // get the user account details from the request
        const { firstName, lastName, username, email, password } = req.body;

        console.log(firstName, lastName, username, email, password);

        // check if username already exists and send a conflict response if it does
        const existingUser = await accountModel.getAccountByUserName(username);
        //console.log(existingUser);
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


module.exports = {
    registerAccount
};
