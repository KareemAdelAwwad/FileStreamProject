// A streaming app that reads from a file and writes to another file using streams and pipes

// 1- Importing the required modules for this app. fs & path modules from node.js
const fs = require('node:fs');
const path = require('node:path');

console.log('Starting the app...');
const read = fs.createReadStream(path.join(__dirname, 'src.txt'), { encoding: 'utf8' }, (err) => {
  if (err) {
    console.error(err);
    return;
  }
});

// 3- Creating a writable stream to the destination file
console.log('Streaming started...');
const write = fs.createWriteStream(path.join(__dirname, 'dest.txt'));

// 4- Piping the read stream to the write stream
// This will read the content from the source file and write it to the destination file
// The pipe() method reads data from a readable stream as it becomes available and writes it to a destination writable stream.
read.pipe(write);

console.log('App finished!');

/*
How to run this app:
1- Open the terminal
2- Navigate to the directory where this file is located
3- Run the following command: node index.js
4- Check the destination file for the content from the source file
*/