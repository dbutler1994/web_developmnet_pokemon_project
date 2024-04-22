

// Controller for rendering the create account page to the user
const getCreateAccount = ((req, res) =>{
    res.render("account", {content: "createAccount"});
})

// Controller for rendering the login page to the user
const getUserLogin = ((req, res) =>{
    res.render("account", {content: "login"});
});


module.exports ={
    getCreateAccount,
    getUserLogin
}