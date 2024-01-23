var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');




/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('contacto', { isContacto: true }); // contacto.hbs
});



router.post('/', async (req, res, next) => {

  //console.log(req.body)

  var nombre = req.body.nombre;
  var email = req.body.email;
  var telefono = req.body.tel;
  var mensaje = req.body.mensaje;

  var obj = {
    to: 'lucianovallejos88@gmail.com',
    subject: 'Contacto desde la web',
    html: nombre + " se contacto a traves y quiere mas info a este correo: " + email + ". <br> Ademas, hizo el siguiente comentario: " + mensaje + ". <br> su tel es " + telefono
  } // cierra var obj

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })  // cierra transporter

  var info = await transporter.sendMail(obj);

  res.render('contacto', {
    isContacto: true,
    message: 'Mensaje enviado Correctamente'
  });

}); // cierra peticion del POST


module.exports = router;
