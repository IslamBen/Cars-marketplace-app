const { envoyerEmailActivation } = require('../util/helpers')
const nodemailer = require('nodemailer')
module.exports.creer_utilisateur = function (req, res) {
    const body = req.body
}

module.exports.valider_email = async function (req, res) {
    const email = req.body.email
    const code = Math.random() * 999999

    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: '',
            pass: ''
        },
    });

    transporter.sendMail({
        from: '',
        to: "",
        subject: "CODE D'ACTIVATION",
        text: `Votre code d'activation : ${code}`,
        html: "<b>CODE</b>",
    }).then((info) => {
        res.json(`Message : Email envoyé`)
    }).catch(err => res.status(400).json(`Message : ${err}`))
}

