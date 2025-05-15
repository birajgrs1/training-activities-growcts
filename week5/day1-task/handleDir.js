const fs = require('fs');
const path = require('path');

const dirName = 'myDir';

fs.mkdir(path.join(__dirname, dirName), (err) => {
    if (err) {
        console.error('Error creating directory:', err);
        return;
    }
    console.log('Directory created successfully!');

    fs.readdir(path.join(__dirname, dirName), (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }
        console.log('Directory contents:', files);
    });

    fs.rmdir(path.join(__dirname, dirName), (err) => {
      if (err) {
          console.error('Error removing directory:', err);
          return;
      }
      console.log('Directory removed successfully!');
  });
});