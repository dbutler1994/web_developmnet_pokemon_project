
// middleware to get userId from session and add it to the request object, so it can be accessed in the controller
const getUserIdFromSession = (req, res, next) => {
    if (req.session && req.session.user && req.session.user.account && req.session.user.account.id) {
      req.userId = req.session.user.account.id;
    }
    next();
  };
  
  module.exports = {
    getUserIdFromSession
  };
  