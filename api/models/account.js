// get access to dbPool
const bcrypt = require('bcrypt');
const dbPool = require('../db/connect');
const collectionsModel = require('./collections');

// get all accounts from the database based on given username
const getAccountByUserName = async (userName) => {
    // sql statement
    let sql = 'SELECT * FROM account WHERE user_name = ?'

    // try and find the user
    try {
        const result = await dbPool.query(sql, [userName]);
        console.log(result[0][0]);
        return result[0][0];
    } catch (error) {
        throw new Error(error.message);
    }
}

//get all accounts from the database based on given email
const getAccountByEmail = async (email) => {
    // sql statement
    let sql = 'SELECT * FROM account_email WHERE email = ?'

    // try and find the user
    try {
        const result = await dbPool.query(sql, [email]);
        return result[0][0];
    } catch (error) {
        throw new Error(error.message);
    }
}



// create a new account in the database. Inserts into account, account_password, and account_email tables
// could have used multi statements here but decided to use transactions instead for better security 
const createAccount = async ( firstName, lastName, username, email, password ) => {
    try {
        // build sql strings
        let accountSql = 'INSERT INTO account (first_name,last_name,user_name) VALUES (?, ?, ?)';
        let passwordSql = 'INSERT INTO account_password (account_id, password) VALUES (?, ?)';
        let emailSql = 'INSERT INTO account_email (account_id, email) VALUES (?, ?)';

        // start sql transaction
        // helps ensure consistency in the database, incase something goes wrong in the middle of inserting into one of the tables
        const dbConnection = await dbPool.getConnection();
        await dbConnection.beginTransaction();

        try {
            // insert user details into the account table
            const accountInsertResult = await dbConnection.query(accountSql, [firstName, lastName, username]);

            // get the id of the inserted user
            const accountId = accountInsertResult[0].insertId;

            // insert password into the password table
            await dbConnection.query(passwordSql, [accountId, password]);

            // insert email into the account_email table
            await dbConnection.query(emailSql, [accountId, email]);

            // create a default collection for the user named owned
            await collectionsModel.createCollection(accountId, 'Owned', true, dbConnection);

            // all gone well so commit the transaction
            await dbConnection.commit();

            // release the held connection
            dbConnection.release();

            // return the account id so that the user can be logged in
            return accountId;

        } catch (error) {
            // something bad happened so rollback the transaction
            await dbConnection.rollback();
            dbConnection.release();
            throw error;
        }

    } catch (error) {
        throw new Error(error.message);
    }
};

// controller function to login a user
const loginAccount = async ( email, password ) => {
    try {
        // get the password and acount id from the database if they exist
        const account = await getAccountbyEmail(email);
        const accountId = account.id;

        const storedPassword = await getAccountPasswordById(accountId);

        // check input password mataches the stored password
        const passwordMatch = await bcrypt.compare(password, storedPassword);

        if (!passwordMatch) {
            const error = new Error("Incorrect Password.");
            //error.code = 401;
            throw error;
        }

        // return the user's account if login is successful
        return account;

    } catch (error) {
        throw new Error(error.message);
    }
};


const getAccountPasswordById = async (accountId) => {
    try{
        const passwordSql = 'SELECT password FROM account_password WHERE account_id = ?';
        const [passwordResult] = await dbPool.query(passwordSql, accountId);
        return passwordResult[0].password.toString('utf-8'); // another 2.5 hours wasted on this line

    } catch (error) {
        throw new Error(error.message);
    }
};


const getAccountbyEmail = async (email) => {
    try{
        const emailSql = `SELECT * FROM view_account WHERE email = ?;`;
        const [accountResult] = await dbPool.query(emailSql, [email]);

        // check if user exists and throw an error if they don't
        if (accountResult.length === 0) {
            const error = new Error("Email address not found. Please register first.");
            //error.code = 401;
            throw error;
        }

        // store the account id
        return accountResult[0];

    } catch (error) {
        throw new Error(error.message);
    }
};

// update the users username
const updateUsername = async (accountId, username) => {
    try{
        const emailSql = `update account set user_name = ? where account_id = ?;`;

        const result = await dbPool.query(emailSql, [username,accountId]);

        // check if the update was successful
        if (result[0].affectedRows > 0) {
            return true; 
        } else {
            return false; 
        }


    } catch (error) {
        throw new Error(error.message);
    }  
};

// update the users email
const updateEmail = async (accountId, email ) => {
    try{
        const emailSql = `update account_email set email = ? where account_id = ?;`;
        const result = await dbPool.query(emailSql, [email,accountId]);

        // check if the update was successful
        if (result[0].affectedRows > 0) {
            return true; 
        } else {
            return false; 
        }


    } catch (error) {
        throw new Error(error.message);
    }  
};

// update the users password
const updatePassword = async (accountId, password ) => {
    try{
        const passwordSql = `update account_password set password = ? where account_id = ?;`;
        const result = await dbPool.query(passwordSql, [password,accountId]);

        // check if the update was successful
        if (result[0].affectedRows > 0) {
            return true; 
        } else {
            return false; 
        }


    } catch (error) {
        throw new Error(error.message);
    }  
};


// update the users password
const closeAccount = async (accountId ) => {
    try{
        const passwordSql = `delete from account  where account_id = ?;`;
        const result = await dbPool.query(passwordSql, [accountId]);

        // check if the update was successful
        if (result[0].affectedRows > 0) {
            return true; 
        } else {
            return false; 
        }


    } catch (error) {
        throw new Error(error.message);
    }  
};



module.exports = {
    getAccountByUserName,
    getAccountByEmail,
    createAccount,
    loginAccount,
    getAccountPasswordById,
    updateUsername,
    updateEmail,
    updatePassword,
    closeAccount
};