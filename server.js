var http = require('http')
var port = process.env.PORT || 3000;
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Port = ',process.env.PORT);
    res.end('Hello World 2\n');
}).listen(port);