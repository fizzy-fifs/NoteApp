const fs = require('fs').promises
const http = require('http');
let index;
const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
  fs.readFile(__dirname + "/noteapp/index.html")
    .then(contents => {
        index = contents;
    })

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(index);

  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
