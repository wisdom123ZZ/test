'use strict';
const nodemailer = require('nodemailer')
const {init} = require('./src/server')


init();


process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

// (async () => {
//     let transporter = nodemailer.createTransport({
//         host: 'smtp.mail.ru',
//         port: 465,
//         secure: true, // use SSL
//         service: 'mail',
//         auth: {
//             user: 'wisdom1234abo@mail.ru',
//             pass: 'oNuETYl5cp2_',
//         },
//     })
//
//
//     let result = await transporter.sendMail({
//         from: '"wisdom1234abo" <wisdom1234abo@mail.ru>',
//         to: 'wisdom1234abo@mail.ru',
//         subject: 'Message from Node js',
//         text: 'This message was sent from Node js server.',
//
//     })
//     console.log(result)
// })();



