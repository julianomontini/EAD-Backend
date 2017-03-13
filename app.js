var nodemailer = require('nodemailer');
var express = require('express');
var app = express();

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "email_here",
        pass: "password_here"
    }
}); 

app.get('/conf/:email/:codigo',function(req,res){

smtpTransport.sendMail({
    from: "Senior E-Leaning <seniorelearning@gmail.com>",
    to: "Recebe <" + req.params.email + ">",
    subject: "Confirmação Senha Senior E-Learning",
    text: "O seu código de confirmação é: " + req.params.codigo
},function(err,resposta){
    if(err){
        console.log(err);
        res.send("Falha ao enviar email");
    }else{
        console.log("Email enviado");
        res.send("Email enviado com sucesso");
    }
    smtpTransport.close();
});

});

app.get('/reset/:email/:codigo',function(req,res){

smtpTransport.sendMail({
    from: "Senior E-Leaning <seniorelearning@gmail.com>",
    to: "Recebe <" + req.params.email + ">",
    subject: "Confirmação Senha Senior E-Learning",
    text: "A sua nova senha é: " + req.params.codigo
},function(err,resposta){
    if(err){
        console.log(err);
        res.send("Falha ao enviar email");
    }else{
        console.log("Email enviado");
        res.send("Email enviado com sucesso");
    }
    smtpTransport.close();
});

});

app.listen(3000);