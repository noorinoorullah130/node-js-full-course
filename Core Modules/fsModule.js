const fs = require("fs");

// fs modules

// reading a file
fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

// writing a file
const content = "Hell, Node.js";

fs.writeFile("output.txt", content, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File written successfully!");
});

fs.writeFile("noor.txt", "I am Noori", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("New File Written!");
});

fs.appendFile("noor.txt", "\nThis is a new line in the file.", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("noor.txt file updated.");
});

