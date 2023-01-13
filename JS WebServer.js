var ssid = 'rede';
var password = 'senha';
var port = 80;

function processRequest (req, res) {
res.writeHead(200);
res.end('Olá estudante!!!');
}

var wifi = require('Wifi');
wifi.connect(ssid, {password: password}, function() {
var http = require('http');
http.createServer(processRequest).listen(port);
console.log('Web server rodando : O endereço de IP é ', wifi.getIP().ip);
});