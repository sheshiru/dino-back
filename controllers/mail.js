// const nodemailer = require('nodemailer');
const Message = require ('../models/Message');


exports.sendMail = (req, res) => {//req = récupération des données de la requète contact
    console.log("Message envoyé");

    // let transporter = nodemailer.createTransport({
    //     host: "smtp.gmail.com",
    //     port: 465,
    //     secure: true, 
    //     service: "gmail",
    //     auth: {
    //       user: "virginiebouvarel@gmail.com",
    //       pass: "47084712"
    //     }
    //   });

    // var message = {
    // from: "virginiebouvarel@gmail.com",
    // to: "virginiebouvarel@gmail.com",
    // subject: "Envoi de message d'un utilisateur",
    // text: "salut toto",
    // html: "<p>salut toto html</p>"
    // };

    // transporter.sendMail(message)
    // .then(()=> console.log(req.body))
    // .catch(err => console.error(err))   
    
    console.log(req.body);
    
    let message = new Message(req.body);//création d'un nouveau message selon le modèle message, à partir des données de la requête
    console.log("Nouveau message:" + message);
    message.save();//sauvegarde en base du message crée (vérifier en base)
    res.status(201).json(message);//envoi du statut "création ok" et du corps du message (voir page response à droite)
       
}