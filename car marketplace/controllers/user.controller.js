const nodemailer = require('nodemailer')
module.exports.create_user = function (req, res) {
    const body = req.body
}

module.exports.send_activation = async function (req, res) {
    const email = req.body.email
    const code = Math.round(Math.random() * 999999)

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASS
        },
    });

    var message = {
        from: "islambenamirouche2001@gmail.com",
        to: "ii_benamirouche@esi.dz",
        subject: "Code d'activation",
        text: "le code est : ",
        html: `<h3>Code : ${code} </p>`
      };

    transporter.sendMail(message).then((info) => {
        res.status(200).json(`Message : Email envoyé`)
    }).catch(err => res.status(400).json(`Message : ${err}`))
}

module.exports.activate_account = function(req,res){
    
}