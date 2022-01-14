module.exports.envoyerEmailActivation = (dest , code) =>{
    return Email.send({
        Host: "smtp.gmail.com",
        Username: "islambenamirouche2001@gmail.com",
        Password: "MKDIR islamben2001 && TOUCH islamben2001",
        To: dest,
        From: "islambenamirouche2001@gmail.com",
        Subject: "CODE D'ACTIVATION",
        Body: `Votre code d'activation : ${code}`,
    });
}
    