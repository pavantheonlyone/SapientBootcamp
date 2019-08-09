// Basic example of express middleware to handle HTTP client requests

const express = require('express');
const process = require('process');
const path = require('path');
const bodyParser = require('body-parser');
const service = require('./services/mongo-contact-service');
const port = process.env.PORT || 4000;

const app = express();
app.use(express.static(path.join(__dirname, 'www')));

// map HTTP GET request for the url '/contacts' to respond with JSON
// representation of contacts using the mongo-contacts-service


// a middleware is a function that receives 3 parameters; request, response and next 
// where use the request, generate the response and direct to next

app.use((req, resp, next) => {
    console.log('reached the CORS Middleware...');
    resp.set('Access-Control-Allow-Origin', '*');
    resp.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    resp.set('Access-Control-Allow-Headers', '*');
    next();
});



// const baseUrl = '/api/contacts';
app.get('/api/contacts', (req, resp) => {
    service.getAllContacts()
        .then(data => resp.json(data));
    // resp.end('/api/contacts not ready yet!');
});

// handler for HTTP DELETE method
app.delete('/api/contacts/:id', (req, resp) => {
    let id = req.params['id'];
    console.log(id);
    service.deleteContact(id)
        .then(() => resp.end('Contact was deleted successfully'))
        .catch(() => resp.end('There was an error !'));


})

app.post('/api/contacts/:id', (req, resp) => {
    service.addNewContact(req.body)
        .then(data => resp.json(data))
        .catch(() => console.log(err));
})
app.listen(port, console.log(`Server started at http://localhost:${port}`));
