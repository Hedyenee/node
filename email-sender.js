const nodemailer = require('nodemailer');
async function sendEmail() {
    
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com',
      port: 587,
      secure: false, 
      auth: {
        user: 'your email',
        pass: 'your password'
      }
    });
    const info = await transporter.sendMail({
        from: '"Your Name" <youremail@example.com>',
        to: 'receiver@example.com',
        subject: 'Test Email',
        text: 'Hello World!',
        html: '<b>Hello World!</b>'
      });
    
      console.log(`Message sent: ${info.messageId}`);
    }
   