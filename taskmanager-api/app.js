const express = require('express');
const app = express();

const { BASE } = require('./utils/config').ROUTES;
const { DEFAULT_PORT } = require('./utils/config');

require('dotenv').config();

//Express has a lots of middlewares - capsule functions which can be attached with our applications
//Server static file
app.use(express.static('public'));

app.use(express.urlencoded()); //key=value&key=value
app.use(express.json()); //{key:value,key:value}

app.use(require('./utils/middlewares/content'));
app.use(BASE, require('./routes/user'));

app.use(require('./utils/middlewares/404'));

const server = app.listen(process.env.PORT || DEFAULT_PORT, err => {

    if (err)
        console.log("Error during server start: ", err);

    else
        console.log("Server started: ", server.address().port);
})