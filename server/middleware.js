module.exports = {
    sessionMe: (req, res, next) => {
        if (!req.session.message){
            req.session.message = "It me, your session!"
            next();
        }
        else {
            next();
        }
    }
}