var express = require('express');
    path    = require('path');


var app =express();
app.use(express.static(path.join(__dirname,'/public')));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/',function(req,res,next){
	res.render('contacto');
	title:"lamierda";
});
/*var server = http.createServer(app).listen(app.get('port'),function(){
	console.log('express server ready' + app.get('port'));
});*/
startServer();
function startServer(){
	var server = app.listen(3000,function(){
		var port = server.address().port;
		console.log('Listening on port'+port);
	});
};
