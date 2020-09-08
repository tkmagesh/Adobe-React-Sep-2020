const http = require('http'),
    fs = require('fs');

const server = http.createServer(function(req /* IncomingMessage */, res /* ServerResponse */){
    /* 
    res.write('<h1>Welcome to Node.js!</h1>');
    res.end(); 
    */
    const stream = fs.createReadStream('./index.html');
    /* 
    stream.on('data', chunk => res.write(chunk));
    stream.on('end', () => res.end()); 
    */
    stream.pipe(res);
});

server.listen(8080);

server.on('listening', () => console.log('Server listening on port 8080'));