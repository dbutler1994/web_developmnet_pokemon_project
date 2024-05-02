// middleware to pass session data to locals
// used so EJS templates can access session data, as this was causing much pain

const sessionDataToLocals = function(req, res, next) {
    res.locals.loggedIn = req.session.loggedIn;
    res.locals.user = req.session.user; 
    next();
};

module.exports = {
    sessionDataToLocals
};