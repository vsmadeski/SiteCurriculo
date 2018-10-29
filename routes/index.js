let express = require("express");
let router = express.Router();
let mailer = require("../mailer.js");

router.get("/", (req, res) => {
    res.render("home.ejs");             
});

router.get("/conhecimentos", (req, res) => {
    res.render("conhecimentos.ejs");
});

router.get("/experiencia", (req, res) => {
    res.render("experiencia.ejs");
});

router.get("/contato", (req, res) => {
    res.render("contato.ejs");
});

router.post("/contato", (req, res) => {
    let contato = req.body.contato;
    mailer.mailOptions.text = "Nome: " + contato.nome +
                                "\nEmail: " + contato.email +
                                "\nAssunto: " + contato.assunto +
                                "\nMensagem: " + contato.mensagem;
    mailer.transporter.sendMail(mailer.mailOptions, (err, info) => {
        if(err){
            console.log(err);
        } else{
            console.log("Email sent " + info.response);
            res.redirect("/contato");
        }
    });
});


module.exports = router;
