const path = require("path");

// const directory = "/user/local";
// const fileName = "example.txt";

// const fullPath = path.join(directory, fileName);

const dir = "src";
const file = "app.js";

const fullPath = path.join(dir, file);

console.log(fullPath);

const fileName = "example.txt";
const extension = path.extname(fileName);

console.log("File Extension:", extension);
