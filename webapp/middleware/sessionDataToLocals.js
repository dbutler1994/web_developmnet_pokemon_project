// middleware to pass session data to locals
// used so EJS templates can access session data

const sessionDataToLocals = function(req, res, next) {
    res.locals.loggedIn = req.session.loggedIn;
    res.locals.user = req.session.user; 
    console.log(res.locals);
    //console.log(req.session);
    next();
};

module.exports = {
    sessionDataToLocals
};