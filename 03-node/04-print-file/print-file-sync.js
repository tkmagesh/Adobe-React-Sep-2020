const fs = require('fs');
const fileName = './sample1.txt';
try {
    const fileContents = fs.readFileSync(fileName, { encoding : 'utf8'});
    console.log(fileContents);
    console.log('Thats all folks!');
} catch (e){
    console.log('something went wrong');
    console.log(e);
}