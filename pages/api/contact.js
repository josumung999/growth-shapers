import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "jmunganga039@gmail.com", // Your email where you'll receive emails
      from: process.env.TEST_EMAIL, // your website email address here
      subject: `Growth Shapers: ${req.body.subject}`,
      html: `<h3>${req.body.subject}</h3><p><b>Message Content: </b>${req.body.message}</p><p>Sender: ${req.body.name} <br> Email: ${req.body.email} <br> Phone number: ${req.body.phone} </p>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;