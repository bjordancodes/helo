module.exports = {
    getUser: (req, res, next) => {
        const db = req.app.get('db');
        console.log(req.session)
        db.get_users()
        .then(response => res.status(200).send(response))
        .catch(err=> console.log(err));
    },
    getPosts: (req, res, next) => {
        const db = req.app.get('db');
        console.log(req.session)
        db.get_user_posts()
        .then(response=> res.send(response))
        .catch(err=> console.log(err))
    },
    updatePost: (req, res, next) => {
        console.log(req.query)
        const db = req.app.get('db');
        db.update_post([req.body.post, req.query.id])
        .then(res=> res.status(200).send('post updated!'))
        .catch(err=> console.log(err));
    },
    getCertainPost: (req, res, next) => {
        const db = req.app.get('db');
        db.get_certain_post(req.body.postid)
        .then(response=> res.status(200).send(response))
        .catch(err=> console.log(err))
    }
}