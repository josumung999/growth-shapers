import nodemailer from 'nodemailer';

const sendMail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.TEST_EMAIL,
      pass: process.env.TEST_PASS
    }
  });

  const mailData = {
    from: process.env.TEST_EMAIL,
    to: 'jmunganga039@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: `<h3>${req.body.subject}</h3><p><b>Message Content: </b>${req.body.message}</p><p>Sender: ${req.body.name} <br> Email: ${req.body.email} <br> Phone number: ${req.body.phone} </p>`,
    html: `<h3>${req.body.subject}</h3><p><b>Message Content: </b>${req.body.message}</p><p>Sender: ${req.body.name} <br> Email: ${req.body.email} <br> Phone number: ${req.body.phone} </p>`
   };

  const mail = await transporter.sendMail(mailData);

  return mail;
  console.log(mail)
   res.status(200).send(
    'Message sent successfully, thanks for contacting US'
   );
}

export default sendMail;