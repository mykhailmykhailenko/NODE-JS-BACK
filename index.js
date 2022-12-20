const http = require('http');
const fs = require('fs/promises');


const userDataBase = [];

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
        } else if(request.url === '/users') {
            return response.end(JSON.stringify(userDataBase));
        } else {
            response.statusCode = 404;
            return response.end('Not found');
        }

    } 
    else if(request.method === 'POST') {
        if (request.url === '/createuser') {
            let jsonString = '';
            request.on('data', (chunk)=>{
                jsonString += chunk;
            });

            request.on('end', ()=>{
              const obj = JSON.parse(jsonString);
              userDataBase.push({...obj,
                    id: userDataBase.length});
            response.statusCode = 201;
            return response.end(JSON.stringify(obj));
            });

        }
    } else {
        response.statusCode = 403;
        response.end('<h1>YOU SEND ANOTHER REQUEST</h1>');
    }
};
const server = http.createServer(requestHandler);
server.listen(3000, () => {
    console.log('app is started')
});