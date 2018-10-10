module.exports = {
    getUser: (req, res, next) => {
        const db = req.app.get('db');
        db.get_users()
        .then(response => res.status(200).send(response))
        .catch(err=> console.log(err));
    },
    getPosts: (req, res, next) => {
        const db = req.app.get('db');
        db.get_user_posts()
        .then(response=> res.status(200).send(response))
        .catch(err=> console.log(err))
    },
    updatePost: (req, res, next) => {
        console.log(req.body.post, req.query.id)
        const db = req.app.get('db');
        db.update_post([req.body.post, req.query.id])
        .then(res=> alert('post updated!'))
        .catch(err=> console.log(err));
    }
}