const crypto = require("crypto");
const express = require("express");
const fileUpload = require("express-fileupload");

const app = express();
app.use(fileUpload());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  try {
    const algorithm = req.query.algorithm || req.body.algorithm || "sha256";
    const hash = crypto.createHash(algorithm);
    hash.update(req.files.file.data);
    res.send(hash.digest("hex"));
  } catch (e) {
    res.status(400).send("Bad request. Please check your algorithm and file.");
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(
    `The hashit container started successfully and is listening for HTTP requests on ${PORT}`
  );
});
