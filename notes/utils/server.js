const http = require('http');
const fs = require('fs');
const path = require('path');

const helper = require("./utils/helper");
const fileManager = require("./utils/fileManager");

let notes = fileManager.loadFile();

const server = http.createServer(async (req, res) => {
  const {url, method} = req;  

  if(url === '/' && method === 'GET'){
    const html = await fs.readFile(path.join(__dirname, 'index.html'), 'utf-8');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
  }
  
 if(url === '/app.js' && method === 'GET'){
   const html = await fs.readFile(path.join(__dirname, 'app.js'), 'utf-8');
   res.writeHead(200, {'Content-Type': 'application/javascript'});
   res.end(js);
}

server.listen(3000, () => {
  console.log("Сервер запущен на порту http://localhost:3000");
});
