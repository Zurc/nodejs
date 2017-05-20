// import http module and assign to variable http
var http = require('http');
var module1 = require('./module1');
var module2 = require('./module2');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // response.write('Hello Cruz from second chapter of NodeJs');
    // now I'm calling myString and executing myFunction from module1
    response.write(module1.myString);
    response.write(module2.myString2);
    module1.myFunction();
    module2.myFunction2();
    response.end();
}

http.createServer(onRequest).listen(8000);

// anonymous functions syntaxis
// we just call the function where we needed
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(module1.myString);
    response.write(module2.myString2);
    module1.myFunction();
    module2.myFunction2();
    response.end();
}).listen(8000);

