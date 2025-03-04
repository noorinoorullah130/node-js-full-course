const fs = require("fs");

// fs modules

// reading a file
// fs.readFile("example.txt", "utf8", (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

// writing a file
// const content = "Hell, Node.js";

// fs.writeFile("output.txt", content, (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log("File written successfully!");
// });

// fs.writeFile("noor.txt", "I am Noori", (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log("New File Written!");
// });

// fs.appendFile("noor.txt", "\nThis is a new line in the file.", (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log("noor.txt file updated.");
// });

// http module
const http = require("http");

// const server = http.createServer((request, response) => {
//     response.statusCode = 200;
//     response.setHeader("Content-Type", "text/plain");
//     response.end("Hello, world!");
// });

// server.listen(3000, () => {
//     console.log("Server running at http://localhost:3000");
// });

// const server = http.createServer((request, response) => {
//     response.statusCode = 200;
//     response.setHeader("Content-Type", "text/plain");
//     response.end("Hello, Node.js!");
// });

// server.listen(3000, () => {
//     console.log("Server is running at http://localhost:3000");
// });

// creating a server

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("New Server is going");
// });

// Start the server

// server.listen(3000, () => {
//     console.log("Server is running again!");
// });

// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.end("Home Page");
//     } else if (req.url === "/about") {
//         res.writeHead(200, {
//             "Content-Tyep": "text/plain",
//         });
//         res.end("About Page");
//     } else {
//         res.writeHead(404, {
//             "Content-Type": "text/plain",
//         });
//         res.end("Page did not found");
//     }
// });

// server.listen(3000, () => {
//     console.log("Server is running once again!");
// });

// path module

const path = require("path");

// const directory = "/user/local";
// const fileName = "example.txt";

// const fullPath = path.join(directory, fileName);

// const dir = "src";
// const file = "app.js";

// const fullPath = path.join(dir, file);

// console.log(fullPath);

// const fileName = "example.txt";
// const extension = path.extname(fileName)

// console.log("File Extension:", extension);

// os module

const os = require("os");

// console.log("Platform", os.platform());
// console.log("CPU Architecture", os.arch());
// console.log("Total Memory", os.totalmem());
// console.log("Free Memory", os.freemem());

// url module

const url = require("url");

// const myUrl = new URL("https://example.com:8080/path/name?query=hello#hash");

// console.log("Host", myUrl.host);
// console.log("Host", myUrl.pathname);
// console.log("Search Params", myUrl.searchParams.get("query"));

// crypto module

// const crypto = require("crypto");

// const hash = crypto.createHash("sha256");

// hash.update("Hello, World!");
// console.log(hash.digest("hex"));

// Custom Module

const sayHello = require("./greetings");
const math = require("./math");

const message = sayHello("Noorullah");

console.log(message);
console.log(math.add(5, 2));
console.log(math.substruct(5, 2));
