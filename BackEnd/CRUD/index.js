const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.set("view engine", "ejs");
app.set("view", path.join(__dirname, "views"));

app.set(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Server is working Properly");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
