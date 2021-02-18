const mongoose = require('mongoose');

const connect = async () => {
  await mongoose.connect('mongodb://localhost/kittens', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
};

const AuthorSchema = new mongoose.Schema({
  name: String,
  photo: String,
  password: String,
  token: String,
  age: Number,
});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = {
  connect,
  Author,
};
