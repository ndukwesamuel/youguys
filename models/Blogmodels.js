const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  writer: {
    type: String,
    default: "Unknown",
  },
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
