const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const PORT = 3000;

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res) {
  let height = Number(req.body.height);
  let weight = Number(req.body.weight);

  let result = weight / (height * height);

  res.send("Your BMI is " + result);
});

app.listen(PORT, function () {
  console.log("Server started on port " + PORT + ".");
});
