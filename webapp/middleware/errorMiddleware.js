// Middleware to handle 404 page not found errors
const error404Handler = (req, res, next) => {
    res.status(404).render('error');
    next();
  };



module.exports= {
    error404Handler
}