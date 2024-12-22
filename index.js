// A streaming app that reads from a file and writes to another file using streams and pipes
const fs = require('node:fs');
const path = require('node:path');

console.log('Starting the app...');
const read = fs.createReadStream(path.join(__dirname, 'src.txt'), { encoding: 'utf8' }, (err) => {
  if (err) {
    console.error(err);
    return;
  }
});

console.log('Streaming started...');
const write = fs.createWriteStream(path.join(__dirname, 'dest.txt'));

read.pipe(write);

console.log('App finished!');
