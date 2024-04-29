// middleware.js

const getUserIdFromSession = (req, res, next) => {
    if (req.session && req.session.user.account.id) {
      req.userId = req.session.user.account.id;
    }
    next();
  };
  
  module.exports = {
    getUserIdFromSession
  };
  