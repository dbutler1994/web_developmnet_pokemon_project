// get access to dbPool
const dbPool = require('../db/connect');

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

// get all accounts from the database based on given email
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


module.exports = {
    getAccountByUserName,
    getAccountByEmail,
    createAccount
};