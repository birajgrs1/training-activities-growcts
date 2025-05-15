const fs = require("fs");
const path = require("path");

const dirName = "myDir";
const fileName = "myFile.txt";
const fileContent = "Hello, world!";
const filePath = path.join(__dirname, dirName, fileName);

fs.mkdir(path.join(__dirname, dirName), (err) => {
  if (err) {
    console.error("Error creating directory:", err);
    return;
  }
  console.log("Directory created successfully!");

  fs.readdir(path.join(__dirname, dirName), (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }
    console.log("Directory contents:", files);
  });
});

// Handling File in a Directory

fs.writeFile(filePath, fileContent, (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File created successfully!");
});

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});

fs.unlink(filePath, (err) => {
  if (err) {
    console.error("Error deleting file:", err);
    return;
  }
  console.log("File deleted successfully!");
});
