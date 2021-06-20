const sgMail = require('@sendgrid/mail')
const User= require('../models/user')

sgMail.setApiKey('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')

const sendFirstEmail = async (sender, receiver,subject, professor) => {
    await sgMail.send({
         to: receiver,
         from: 'joshishreehar@gmail.com',
         subject: 'We have found your book',
         text: `Dear User,
         The book of the subject ${subject} taught by professor ${professor} is with the student with ${sender.Name}.
         The email address is ${sender.Email}.
         Contact ${sender.Name} ASAP before the book runs out.`
     })
}
const sendSecondEmail = async (sender, receiver, subject, professor) => {
    await sgMail.send({
         to: receiver,
         from: 'joshishreehar@gmail.com',
         subject: 'We have found your book',
         text: `Dear User,
         The book of the subject ${subject} taught by professor ${professor} is with the student with ${sender.Name}.
         The email address is ${sender.Email}.
         Contact ${sender.Name} ASAP before the book runs out.`
     })
}

module.exports = {
    sendFirstEmail,
    sendSecondEmail
}
