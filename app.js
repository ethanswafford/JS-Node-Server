// calling server components
var http = require('http');
var express = require('express');
var url = require('url');
var path = require('path');
var net = require('net');

const app = express();

// port used to open server
const port = 4443;

// middleware for server routes
app.use(express.json());
// Start the server
app.get("/api/data", (req,res) => {
    try {let data = {message: "Server: Good Reply"}; res.status(200).json(data);
    } catch (error) {
        console.error("Server: Error occurred:", error); res.status(500).json({error:"Internal Server Error"});
    }
})

app.listen(port, () => {
    console.log(`Server is up and running via port:${port}.`)
});

// Developer tests
console.log("TEST CONTROLLER");
