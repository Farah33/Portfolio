// DEPENDENCIES
var path = require("path");

// ROUTING
module.exports = function(app) {
  // HTML GET Requests
  app.get("*", function(req, res) {
    var requestPath =req.originalUrl.toLowerCase();
    res.sendFile(path.join(__dirname, "../public"+requestPath));
  });

  // If no matching route is found default to home
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};