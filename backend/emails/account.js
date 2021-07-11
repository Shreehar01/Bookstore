// const sgMail = require('@sendgrid/mail');
import sgMail from '@sendgrid/mail'

import User from '../models/user.js';

sgMail.setApiKey('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')

const sendFirstEmail = async (sender, receiver,subject, professor) => {
    
    try{
        await sgMail.send({
         to: receiver,
         from: 'joshishreehar@gmail.com',
         subject: 'We have found your book',
         text: `Dear User,
         The book of the subject ${subject} taught by professor ${professor} is with the student with ${sender.Name}.
         The email address is ${sender.Email}.
         Contact ${sender.Name} ASAP before the book runs out.`
     })
    } catch (error){
        console.log("Error is being produced in the sedngrdi")
    }
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

export default sendFirstEmail;

