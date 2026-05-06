// calling server components
var http = require('http');
var express = require('express');
var url = require('url');
var path = require('path');
var net = require('net');

const app = express();

// port used to open server
const port = 4443;

app.get('/api/data', (req,res) => {
    try {let data = {message: "Server Reply"}; res.status(200).json(data);
    } catch (error) {
        console.error('Error occurred:', error);
    }
})

// Developer tests
console.log('TEST CONTROLLER');