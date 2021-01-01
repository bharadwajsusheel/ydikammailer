const mongoose = require('mongoose');

function dbConnect(DB_URL) {
    const connectionOptions = {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        autoIndex: false
    };
    mongoose.connect("mongodb+srv://admin:admin@1234@cluster0.an6w8.mongodb.net/ydikam", connectionOptions)
        .then(() => console.log('Connected to DB...'))
        .catch(err => console.log(`DB Connection Error: ${err}`));
}

module.exports = dbConnect;