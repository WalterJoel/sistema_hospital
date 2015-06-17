var lista = new Array();
function enviar_mensaje(req, res){
   res.render("enviar_mensaje.jade", {
      lista: lista
   });
}
exports.get_enviar_mensaje = function(req, res){
   enviar_mensaje(req, res);
};
exports.post_enviar_mensaje = function(req, res){
   var asunto = req.body.asunto;	
   var mensaje = req.body.mensaje;
   lista.push({
      asunto: asunto,
      mensaje: mensaje
   });
   enviar_mensaje(req, res);
};