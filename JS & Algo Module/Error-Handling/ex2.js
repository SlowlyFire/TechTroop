const fs = require('fs');

function readFileWithErrorHandling(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      switch (err.code) {
        case 'ENOENT':
          callback(`File not found: ${filePath}`);
          break;
        case 'EISDIR':
          callback(`Cannot read: "${filePath}" is a directory`);
          break;
        case 'EACCES':
          callback(`Permission denied: cannot read "${filePath}"`);
          break;
        default:
          callback(`Error reading file: ${err.message}`);
      }
    } else {
      const sizeInBytes = Buffer.byteLength(data, 'utf8');
      callback(`File read successfully. Size: ${sizeInBytes} bytes`);
    }
  });
}

// Tests
readFileWithErrorHandling('existing.txt', (result) => console.log(result));
readFileWithErrorHandling('nonexistent.txt', (result) => console.log(result));
readFileWithErrorHandling('/some/directory', (result) => console.log(result));