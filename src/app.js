const express = require('express');
const cors = require('cors');

const app = express();
const users = require('./api/users');
const authentications = require('./api/authentications');

const auth = require('./middlewares/auth');

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.json({
        status: 'success',
        message: 'HealthPosture API Running',
    });
});

app.get('/profile', auth, (req, res) => {
    return res.json({
        status: 'success',
        data: {
            user: req.user,
        },
    });
});

app.use('/api/users', users());
app.use('/api/authentications', authentications());

module.exports = app;