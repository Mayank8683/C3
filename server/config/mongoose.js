const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/online_bookstore_mongo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
