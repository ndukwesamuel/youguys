const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 9000;

const Blog = require("./models/Blogmodels");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(express.static(__dirname + "/public"));

mongoose
  .connect(
    "mongodb+srv://samheart:samheart@firstbank.exu1p.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((data) => console.log("db connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  Blog.find()
    .then((result) => {
      res.render("index", { blogs: result });
    })
    .catch((err) => console.log(err));
});

// app.get("/test", async (req, res) => {
//   const blogdata = await new Blog({
//     title: "why i like man u",
//     body: " ronaldo is the best",
//   });

//   const data = await blogdata.save();
//   res.json(data);
// });

app.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
