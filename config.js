require('dotenv').config({path: __dirname + '/.env'});

const { PORT, DB_URL, ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

module.exports = { 
    PORT, 
    DB_URL,
    ADMIN_EMAIL,
    ADMIN_PASSWORD
};