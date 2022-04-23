const express = require("express");
const { videos, user } = require("./fakeData");
const app = express();
app.use(express.json());

app.get("/api/user/", (req, res) => {
  setTimeout(() => {
    res.json(user);
  }, 2000);
});

app.get("/api/videos/", (req, res) => {
  setTimeout(() => {
    res.json(videos);
  }, 3000);
});

app.listen(5000, () => {
  console.log("Backend server is running!");
});
