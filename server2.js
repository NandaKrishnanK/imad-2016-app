var http = require('http');
var fs = require('fs');
//2.
var server = http.createServer(function (req, resp) {
    //3.
    if (req.method === "GET") {
        if (req.url === "/") {
            fs.readFile("ui/001.html", function (error, pgResp) {
                if (error) {
                    resp.writeHead(404);
                    resp.write('Contents you are looking are Not Found');
                } else {
                    resp.writeHead(200, { 'Content-Type': 'text/html' });
                    resp.write(pgResp);
                }
                 
                resp.end();
            });
        } else {
            //4.
            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.write('<h1>Product Manaager</h1><br /><br />To create product please enter: ' + req.url);
            resp.end();
        }
    }
//    else if (req.method === "POST") 
        
});
//5.
server.listen(8080);
 
console.log('Server Started listening on 8080');
