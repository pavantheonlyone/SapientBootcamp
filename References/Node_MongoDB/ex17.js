// a very basic HTTP request handler example

const {createServer} = require('http');
const process = require('process');

const server = createServer((req, resp)=>{
    console.log('Some client called from address : '+req.url);
    resp.end('Hello, from pavan! My server time is : '+new Date().toString());
});
const port = process.env.PORT || 4000;
server.listen(port, ()=> {
    console.log(`Server started at http://10.150.220.40:${port}`);
});

