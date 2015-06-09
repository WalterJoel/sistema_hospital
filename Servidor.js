//IMPORTO LA DEPENDENCIA EXPRESS PARA CONNFIGURAR MI SERVIDOR
var express = require("express");
//llamo a la funcion express para usar sus funciones
var app     = express();
app.listen(8080);         //Levantamos el servidor en el puerto 8080	

app.get("/inicio",function(request,response){
	response.send("Hola");
	//En esta funcion se ejecuta todo el codigo cuando se llame a localhost:8080/inicio
});
//Escucha la peticion a la ruta localhost:8080/informes 
app.get("/informes",function(request,response){
	response.send("Infoo");
});
