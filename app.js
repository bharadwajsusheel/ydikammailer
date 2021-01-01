const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConnect = require('./dbConnect');
const { PORT, DB_URL } = require('./config');

// SERVER SETUP
const app = express();
app.listen(PORT, err => {
    if (err)
        console.log(`Server Connection Error: ${err}`);
    else
        console.log(`Listening on Port ${PORT}...`);
});

// DB CONNECTION
dbConnect(DB_URL);

// APP MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// APP ROUTES MIDDLEWARE
const appointmentRouter = require('./routes/appointment');
app.use('/api/', appointmentRouter);


app.get('/', (req, res) => res.send({ "msg": "hello" }));