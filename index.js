const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const { secret } = require('./config')

const port = 3005;

const app = express();

app.listen(port, () => {
    console.log(`I'll be right by your side till ${port}`)
})

//the middle men
const corsOptions = {
    origin: "http:localhost:3005"
}
app.use(cors(corsOptions));
app.use(json());
app.use(session({
    secret,
    saveUninitialized: false,
    resave: false
}))
app.use(express.static(__dirname + '/public'));

//bring in controllers
const profileCtrl = require('./controllers/profileCtrl')
const userCtrl = require('./controllers/userCtrl')


//endpoints
app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriendsProfiles);
app.post('/api/addfriend', profileCtrl.addFriend);
app.delete('/api/deletefriend', profileCtrl.deleteFriend);





