const http = require('http');
const fs = require('fs/promises');

const requestHandler = (request, response)=>{
    console.log(request.url, request.method);

    if(request.method === 'GET') {
        if (request.url === '/') {
            fs.readFile('./views/index.html', 'utf-8')
            .then(data => response.end(data))
            .catch(error => response.end(error));
        } else if (request.url === '/home.html'){
            fs.readFile('./views/home.html', 'utf-8')
            .then(data => response.end(data))
            .catch(error => response.end(error));
        } else if (request.url === '/style.css') {
            fs.readFile('./views/style.css', 'utf-8')
            .then(data => response.end(data))
            .catch(error => response.end(error));
        } else {
            response.statusCode = 404;
            return response.end('Not found');
        }

    } 
    else if(request.method === 'POST') {
        response.end('<h1>YOU SEND A POST REQUEST</h1>'); 
    } else {
        response.statusCode = 403;
        response.end('<h1>YOU SEND ANOTHER REQUEST</h1>');
    }

};
const server = http.createServer(requestHandler);
server.listen(3000, () => {
    console.log('app is started')
});