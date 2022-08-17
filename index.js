// Include http module from Node.js
const http = require('http')

// Define server related variables
const hostname = 'localhost'
const port = 3000

// Handle request and response here
const server = http.createServer((req, res) => {
  // Do something to handle request and response here
  //Status code_200 is ok 
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('This my first time it is work. server created in Node.js')
})

//Start and listen the server
server.listen(port, hostname, () => {
  console.log(`The server is listening on http://${hostname}:${port}`)
})