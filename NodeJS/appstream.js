const fs = require('fs');
const zlib = require('zlib');

var readable = fs.createReadStream(`${__dirname}/greet.txt`);
var writeable = fs.createWriteStream(`${__dirname}/greetcopy.txt`);
var compressed = fs.createWriteStream(`${__dirname}/greet.txt.gz`);

//readable.pipe(writeable);
var gzip = zlib.createGzip();

readable.pipe(gzip).pipe(compressed);