// console.log('Hello Node');
// console.log(__filename);
// console.log(__dirname);

// setTimeout(() => {
//     console.log('Set Timeout was for 3 sec');
// }, 3000);

// setInterval(() => {
//     console.log('Set Interval is of 5 sec');
    
// }, 3000);

// const traveller= require('./tourism')

// traveller.travel();

const http = require('http');

http.createServer(function (req,resp) {

    resp.writeHead(200, {"Content-Type":"text/plain"});  
    resp.write("Hello Yash, Welcome to Jumerah")
    resp.write("\nEnjoy Your stay at Atlantis")
    
    resp.end()
    
}).listen(8889) 