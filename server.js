const express = require("express");
const path = require('path');
// const logger = require('morgan');
// const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

// const server = require('http').Server(app);
// const io = require('socket.io')(server);

const PORT = process.env.PORT || 3002;

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});