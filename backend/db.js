const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/inotebook')
  console.log('Connected to MongoDB!!')
};

module.exports = main;