const express = require('express');
const {json} = require('body-parser');
const massive = require('massive');
const cors = require('cors');
const session = require('express-session');
require('dotenv').config();
const {getUser, getPosts, updatePost, getCertainPost} = require('./controller');
const {sessionMe} = require('./middleware');

const app = express();
app.use(json());
app.use(cors());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {}
}))


massive(process.env.CONNECTION_STRING).then(db => app.set('db', db)).catch(err => console.log(err));

app.use(express.static('public'));

app.get('/user', getUser);
app.get('/posts', sessionMe, getPosts);
app.put('/post', updatePost);
app.post('/post', getCertainPost);

const port = 3005;
app.listen( port, () => console.log(`Server listening on port ${port}!`));