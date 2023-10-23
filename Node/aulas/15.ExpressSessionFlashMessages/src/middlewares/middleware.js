exports.middlewareGlobal = (req, res, next) =>{
    res.locals.umaVariavelLocal = 'cleber';
    next();
}