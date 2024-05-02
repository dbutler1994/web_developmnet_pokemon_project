// Middleware to handle 404 page not found errors
const error404Handler = ( req, res, next) => {
    res.status(404).render('error', {message: "404 Error, Oops! We couldn't find that page in the Pokedex."});
    next();
  };

const error500Handler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', {message: "500 Error, Oops! Something went wrong on our end. Please try again later."});
}


module.exports= {
    error404Handler,
    error500Handler
}