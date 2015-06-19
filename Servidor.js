var express = require('express');
    path    = require('path');
	//routes = require('./routes');
var nunjucks = require("nunjucks");
//extrayendo un dato de servidor.js
var modelos = require("./MODELOS/Principal.js");
console.log(modelos.Prueba);
var app =express();
app.use(express.static(path.join(__dirname,'/public')));
//app.use(app.routes);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');


startServer();

app.post('/:name', function(req, res){
 var datos =req.params.name.split();
// var len =datos.lenght-1;
 /*while(len>=0)
 {
 	salida = salida+datos[len]+ "|";
 	len=len+1;
 }*/
 res.send('<h1><center>'+ datos +'</center></h1>');
});
//nunjucks.configure(__dirname+ "/",{})
function startServer(){
	var server = app.listen(3000,function(){
		var port = server.address().port;
		console.log('Listening on port'+port);
	});
};

