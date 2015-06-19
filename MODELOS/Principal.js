var Sequelize = require("sequelize");
//Configurando la BD
//Parametros : Nombre BD, Usuario,Password,objeto javascript
var schemas = "Hospital_T";
var sequelize = new Sequelize("Hospital_BD","postgres","capi",
				{host:'localhost',
				dialect:"postgres",
				schema:schemas
				});

sequelize.authenticate().success(function(a){
	console.log("BASE READY");	
});
//sequelize.query("SELECT *FROM \"Hospital_T\".\"Paciente\"");
//sequelize.query("INSERT INTO \"Hospital_T\".\"Persona\" (\"Codigo_Persona\",\"DNI\",\"Nombre\",\"Sexo\",\"Edad\",\"Ano_Nacimiento\",\"Contrasena\")VALUES('35','72422420','capi','TRUE','18','1989','lala') ");
//Exporto el modelo de la tabla paciente con el fin de poder utilizar esta var en otro archivo
module.exports.Prueba = "hola";
/*module.exports.Table_Pae =Table_Pae;
module.exports.Table_Doctor   = Table_Doctor;*/