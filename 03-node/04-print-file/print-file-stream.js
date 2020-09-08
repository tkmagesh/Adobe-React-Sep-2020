const fs = require('fs');

const fileName = './sample.txt';

const stream = fs.createReadStream(fileName, { encoding : 'utf8'});

/* Readable Stream events -> open, data, end, close, error */
let readCount = 0;

stream.on('data', function(chunk){
    console.log(chunk);
    ++readCount;
});

stream.on('end', function(){ 
    console.log('Thats all folks!');
    console.log(`Read count = ${readCount}`);
});

stream.on('error', function(err){
    console.log('something went wrong');
    console.log(err);
});

