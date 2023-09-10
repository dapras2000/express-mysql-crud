const logRequest = (req, res, next) => {
    console.log('Log req ke PATH: ', req.path);
    next();
}

module.exports = logRequest