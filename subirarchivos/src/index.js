const express = require("express");
const fs = require("fs");
const app = express();
const port = 80;

var multer = require("multer");

var avatarStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, "profile." + file.originalname.split(".").slice(-1));
  }
});

const cors = require("cors");
app.use(cors());

app.post(
  "/upload",
  multer({ storage: avatarStorage }).single("file"),
  (req, res) => {
    console.log(req.file);
    res.sendStatus(200);
  }
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));