// Setup empty JS object to act as endpoint for all routes
projectData =  {'date': '',
                'temparature': '',
                'userResponse': ''};

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
// const { response } = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

const port = 3000;

// Setup Server
const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)});

app.get('/all', function (req, res) {
    res.send(projectData);
})

app.post('/add', addData)

function addData (req, res) {
    console.log(req.body)
    projectData.date = req.body.date;
    projectData.temparature = req.body.temparature;
    projectData.userResponse = req.body.userResponse;
    res.send(projectData)
}