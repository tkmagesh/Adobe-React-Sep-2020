const http = require('http'),
    fs = require('fs'),
    path = require('path');

const server = http.createServer(function(req /* IncomingMessage */, res /* ServerResponse */){
    console.log(req.url);
    /* 
    res.write('<h1>Welcome to Node.js!</h1>');
    res.end(); 
    */
    //const stream = fs.createReadStream('./index.html');
    /* 
    stream.on('data', chunk => res.write(chunk));
    stream.on('end', () => res.end()); 
    */

    var resourceName = req.url === '/' ? 'index.html' : req.url;
    var resourceFullName = path.join(__dirname, resourceName);

    if (!fs.existsSync(resourceFullName)) {
        res.statusCode = 404;
        res.end();
        return;
    }
    const stream = fs.createReadStream(resourceFullName);
    stream.pipe(res);
});

server.listen(8080);

server.on('listening', () => console.log('Server listening on port 8080'));