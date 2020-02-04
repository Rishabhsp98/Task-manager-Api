const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'rishabhsp98@gmail.com',
        subject:'Thanks for joining in!',
        text:`Welcome to the App.${name}
        Let me know how you get along with the App. `
    })
}

const sendCancelEmail = (email,name) =>{
    sgMail.send({
        to:email,
        from:'rishabhsp98@gmail.com',
        subject:'Good luck for your future endevours!',
        text:`You can tell ${name} us your experience with us and is there anything by which we can get you back on board?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}