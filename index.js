const http = require('http');

const requestHandler = (request, response)=>{
    response.end('<html><h1>HELLO YOU</h1></html>');
};

const server = http.createServer(requestHandler);

server.listen(3000, () => {
    console.log('app is started')
});