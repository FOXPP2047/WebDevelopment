const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const PORT = 3000;

app.get("/", function(req, res) {
res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  const query = req.body.cityName;
  const apiKey = "987388ad46497711af272682571f0a64";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=metric&appid=" + apiKey;
  https.get(url, function(response) {
  console.log(response.statusCode);

  response.on("data", function(data) {

    const weatherData = JSON.parse(data);
    const icon = weatherData.weather[0].icon;
    const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

    res.write("<p>The weather is currently " + weatherData.weather[0].description + "</p>");
    res.write("<h1>The temperature in " + query + " is " + weatherData.main.temp + "degrees Celcius.</h1>");
    res.write("<img src=" + imageURL + ">");

    res.send();
  });

  });
});

//res.send("Server is up and running.");

app.listen(PORT, function() {
  console.log("Server is running on " + PORT + ".");
});
