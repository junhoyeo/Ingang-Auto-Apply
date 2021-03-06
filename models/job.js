const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JobSchema = new Schema({
  user: String,
  timestamp: { type : Number, default: Date.now },
  ingangTime: Number,
  ingangDate: String,
});

module.exports =  mongoose.model('Job', JobSchema)
