const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profiles = require("./routes/api/profiles");
const app = express();

// DB config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello from Server Of JIM."));

// use routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/profiles", profiles);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
