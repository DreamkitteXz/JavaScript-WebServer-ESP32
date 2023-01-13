<h2 align='center'>
  An JavaScript WebServer using the ESP32 MCU with Espruino
</h2>
<h3>
  Visão geral 
</h3>
<p>
Voce irá aprender:
<ul>
    <li>Fazer um simples WebServer com JavaScript no ESP32 utilizando <a href="http://www.espruino.com/">Espruino</a>.</li> 
</ul>
<p><b>IMPORTANTE:</b></p>
<ul>
<li>Para realizar esse tutorial você ja tem que ter o Firmware do Espruino no seu ESP32.</b></li>
<li>Visite esse tutorial para gravar o Firmware do Espruino:
<a href="https://github.com/DreamkitteXz/JavaScript-com-ESP32">JavaScript-com-ESP32</a>.</li>
</ul>
<h3 align='center'> 
O Código
</h3>
<p>1. Coloque no código abaixo o ssid da sua rede a senha da mesma <code>'rede'</code> e <code>'senha'</code>.</p>
<p align='center'><pre><code>var ssid = 'rede';
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
console.log('Web server running : IP address is ', wifi.getIP().ip);
});</code></pre></p>	
<p>Por exemplo, se sua rede for <code>ETEFMC</code> e a senha for <code>123456</code> seu código deverá ficar desse jeito:</p>
<p align='center'><pre><code>var ssid = 'ETEFMC';
var password = '123456';
var port = 80;
 
function processRequest (req, res) {
res.writeHead(200);
res.end('Olá estudante!!!');
}
 
var wifi = require('Wifi');
wifi.connect(ssid, {password: password}, function() {
var http = require('http');
http.createServer(processRequest).listen(port);
console.log('Web server running : IP address is ', wifi.getIP().ip);
});</code></pre></p>	

<p>
  **Lembre-se de conectar o espruino com o ESP32 clicando no canto superior esquerdo.**
</p>
<p> Execute seu código e espere esse resultado:</p>
<p align='center'><img src="images\Test.jpg" alt="Screen" width="700" height="350"></P>
<p> Vá até o endereço de IP:</p>
<p align='center'><img src="images\pagina.png" alt="Screen" width="700" height="350"></P>

<h4 align="center"><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Party%20Popper.png" height="30px">Pronto! Você tem um WebServer básico rodando no seu ESP32, Agora é com você, seja criativo para criar seus projetos!!!<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Party%20Popper.png" height="30px"></h4>
