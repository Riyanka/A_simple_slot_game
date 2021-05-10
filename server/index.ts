const handler = require("./serviceHandler");
const express = require("express");
const app = express();
const port = 9000;

//Serves static content from folder "client"
app.use(express.static("client"));

//Called on application load for getting the initial configuration
app.get("/config", handler.getInitialCOnfig);

//Called on button click to get the set of randomised number and the bonus flag
app.get("/result", handler.getResult);

//listening port and message
app.listen(port, () => console.log(`App listening on port ${port}!`));
