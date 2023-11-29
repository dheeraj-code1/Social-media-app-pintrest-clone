const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/nayaapp");

const postSchema = new mongoose.Schema({
  imageCaption: {
    type: String,
    
  },
  image:{
    type: String,
    },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
  },
  dateTime: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

module.exports  = mongoose.model('Post', postSchema);


