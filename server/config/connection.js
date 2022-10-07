const mongoose = require('mongoose')



mongoose.connect(process.env.MONGOD_URL || 'mongodb://127.0.0.1:27017/scenantics', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;