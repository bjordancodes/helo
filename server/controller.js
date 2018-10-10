module.exports = {
    getUser: (req, res, next) => {
        const db = req.app.db.get('db');
        db.get_users()
        .then(response => res.status(200).send(response))
        .catch(err=> console.log(err));
    },
    getPosts: (req, res, next) => {
        const db = req.app.db.get('db');
        db.get_user_posts()
        .then(response=> res.status(200).send(response))
        .catch(err=> console.log(err))
    }
}