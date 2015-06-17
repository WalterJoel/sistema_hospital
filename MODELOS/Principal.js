var Sequelize = require("sequelize");
//Configurando la BD
//Parametros : Nombre BD, Usuario,Password,objeto javascript
var schemas = "Hospital_T";
var sequelize = new Sequelize("Hospital_BD","postgres","capi",
				{host:'localhost',
				dialect:"postgres",
				schema:schemas
				});
//Las operaciones en node se ejecutan de manera asincrona, es por eso que pueden ejecutarse unos antes q otros
//debido a que mientrtas levanta archivos del disco va haciendo otras funciones que ya estan listas

sequelize.authenticate().success(function(a){
	console.log("BASE READY");	
});
/*
//-----------------------Mapeos de las tablas con sequelize ----------------------//
//A las tablas las podemos utilizar como objetos :)
var Table_Paciente = sequelize.define("Table_Paciente",{
	Codigo_Paciente:{
		primarykey:true,  //Le indico que es la clave primaria
		type:Sequelize.INTEGER	
	},
	Historia_Clinica:Sequelize.TEXT,
	Codigo_Persona:Sequelize.INTEGER
},{
	//Le indico el verdadero nombre de la tabla que esta en mi DB
	tableName:'Hospital_T.Paciente'
});
var Table_Doctor = sequelize.define("Table_Doctor",{
	Codigo_Doctor:{
		primarykey:true,  //Le indico que es la clave primaria
		type:Sequelize.INTEGER	
	},
	Codigo_Persona:Sequelize.INTEGER
},{
	//Le indico el verdadero nombre de la tabla que esta en mi DB
	tableName:'Hospital_T.Doctor'
});
*/
sequelize.query("SELECT *FROM \"Hospital_T\".\"Paciente\"");
sequelize.query("INSERT INTO \"Hospital_T\".\"Persona\" (\"Codigo_Persona\",\"DNI\",\"Nombre\",\"Sexo\",\"Edad\",\"Ano_Nacimiento\",\"Contrasena\")VALUES('35','72422420','capi','TRUE','18','1989','lala') ");
//sequelize.query("");
/*var Table_Pae = sequelize.define("Table_Pae",{
	Codigo_NOSE:{
		primarykey:true,  //Le indico que es la clave primaria
		type:Sequelize.INTEGER	
	},
	Codigo_Ambiente:Sequelize.INTEGER
},{
	//Le indico el verdadero nombre de la tabla que esta en mi DB
	tableName:'Hospital_T.NOSE'
});

//Exporto el modelo de la tabla paciente con el fin de poder utilizar esta var en otro archivo
module.exports.Table_Paciente = Table_Paciente;
module.exports.Table_Pae =Table_Pae;
module.exports.Table_Doctor   = Table_Doctor;*/