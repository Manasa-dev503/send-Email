var nodeMailer = require('nodemailer')

var transporter = nodeMailer.createTransport({
    host : "bathinamanasa503@gmail.com",
    port : 597,
    secure : false,
    auth : {
        user : '198a1a0503manasa@gmail.com',
        pass : 'pymw njvc fbli fgwe'  //app password
    }
})

var mailOptions = {
    from : '198a1a0503manasa@gmail.com',
    to : 'manasa.bathina2403@gmail.com',
    subject : 'sending email',
    text : 'How are you'
}

transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error)
    }
    else{
        console.log("Email sent")
    }

})