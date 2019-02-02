const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var dataBase = mongoose.connection;

dataBase.on('error', console.error.bind(console, 'connection error:'));
dataBase.once('open', function () {
  console.log('works!!!');
});
//added 'new' in the line below, 
let repoSchema = new mongoose.Schema({
  // TODO: your schema here!
  name: String,
  creator: String,
  repoId: Number,
  dateUpdated: String,

});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */  ) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;