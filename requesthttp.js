var request = require('request');
var fs = require('fs');
console.log('Downloading Image');
request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err; 
       })
       .on('response', function (response) {                           // Note 3
         console.log('Response Status Code: ', response.statusCode);
         console.log('Response status message:',response.statusMessage);
         console.log('Response content type:',response.headers['content-type']);

       })
       

       .pipe(fs.createWriteStream('./future.jpg')); 

console.log('Download complete.');