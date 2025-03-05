const http = require("http");

// GET request
// const server = http.createServer((req, res) => {
//     if(req.method === "GET" && req.url === "/") {
//         res.writeHead(200, {"Content-Type": "text/plain"});
//         res.end("Welcome to homepage");
//     } else {
//         res.writeHead(404, {"content-type": "text/plain"})
//         res.end("Page not found")
//     }
// });

// POST request
const server = http.createServer((req, res) => {
    if (req.method === "POST" && req.url === "/submit") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {
            res.writeHead(200, { "content-type": "application/json" });
            res.end(JSON.stringify({ message: "Data recieved", data: body }));
        });
    } else {
        res.writeHead(404, { "content-type": "text/plain" });
        res.end("Route not fount");
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
