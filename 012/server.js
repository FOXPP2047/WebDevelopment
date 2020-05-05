const express = require("express");
const app = express();
const PORT = 3000;

// request, response
// / means home route
app.get("/", function(req, res) {
    //console.log(request);
    res.send("<h1>Hello, World!</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at: qlxhdl55@gmail.com");
});

app.get("/about", function (req, res) {
    res.send("My name is Yongmin Cho.");
});

app.get("/hobby", function (req, res) {
  res.send("Sibal");
})

app.listen(PORT, function () {
  console.log("Server started on port 3000.")
});
