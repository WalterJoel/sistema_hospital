//IMPORTO LA DEPENDENCIA EXPRESS PARA CONNFIGURAR MI SERVIDOR
var express = require("express");
//llamo a la funcion express para usar sus funciones
var app     = express();
var nunjucks=require("nunjucks");
// con esto podre pintar todo un archivo html, no solo pedazos de codigo, ademas indicar la carpeta
// MyHTML para poder trabajar mas abajo llamando a sus archivos que contiene
nunjucks.configure(__dirname + "/My_HTML",{  //dirname contiene la ruta actual del archivo, sintaxis
	express:app			//le asigno el servidor express
});


app.listen(8080);         //Levantamos el servidor en el puerto 8080	

app.get("/inicio",function(request,response){
	//response.send("Hola");
	response.render("Inicio.html");  //Render trae el archivo html
	//En esta funcion se ejecuta todo el codigo cuando se llame a localhost:8080/inicio
});
//Escucha la peticion a la ruta localhost:8080/informes 
app.get("/informes",function(request,response){
	response.send("Infoo");
});
