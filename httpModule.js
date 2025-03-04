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

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Home Page");
    } else if (req.url === "/about") {
        res.writeHead(200, {
            "Content-Tyep": "text/plain",
        });
        res.end("About Page");
    } else {
        res.writeHead(404, {
            "Content-Type": "text/plain",
        });
        res.end("Page did not found");
    }
});

server.listen(3000, () => {
    console.log("Server is running once again!");
});
