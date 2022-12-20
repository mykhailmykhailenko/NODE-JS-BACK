const http = require('http');

const requestHandler = (request, response)=>{
    if(request.method === 'GET') {
        response.end('<h1>YOU SEND A GET REQUEST</h1>');
    } 
    else if(request.method === 'POST') {
        response.end('<h1>YOU SEND A POST REQUEST</h1>'); 
    } else {
        response.end('<h1>YOU SEND ANOTHER REQUEST</h1>');
    }

};

const server = http.createServer(requestHandler);
server.listen(3000, () => {
    console.log('app is started')
});