const Message = require("../models/Message");
const nodemailer = require("nodemailer");

exports.sendMail = (req, res) => {
  //Vérification de la récupération des données
  console.log("Données message récupérées:");
  console.log(req.body);

  //Création d'un nouveau message avec les données récupérées
  let message = new Message(req.body);
  console.log("Nouveau message:" + message);

  //Sauvegarde du nouveau message en base
  message.save();

  //Réponse à la requête: statut "création ok" + corps du message
  res.status(201).json(message);

  //Paramétrage de l'envoi d'email avec nodemailer
  var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b97035add41e00",
      pass: "56657d6fa53392"
    }
  });

  //Constitution du corps du mail à envoyer
  var mailOptions = {
    from: `<Pascalpes>, < pascalpes-434864@inbox.mailtrap.io>`,
    to: `<${req.body.email}>`,
    subject: "Envoi de message depuis le contactForm",
    text: `${req.body.text}`,
    html: `<p>${req.body.text}</p>`
  };

  //Envoi du mail
  transporter
    .sendMail(mailOptions)
    .then(() => console.log(req.body))
    .catch(err => console.error(err));
};
