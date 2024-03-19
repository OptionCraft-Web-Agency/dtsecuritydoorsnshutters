import nodemailer from "nodemailer";

export default async (req, res) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Configure your SMTP transporter
    let transporter = nodemailer.createTransport({
      service: "gmail", // Use your preferred email service
      auth: {
        user: "your-email@gmail.com", // Your email
        pass: "your-email-password", // Your email password
      },
    });

    // Email options
    let mailOptions = {
      from: email,
      to: "haizzzchic@gmail.com", // Where you want to receive the emails
      subject: `[Contact Form DTSEC] Customer - ${name}`,
      text: message,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).send("Email sent successfully");
      }
    });
  } else {
    // Handle any non-POST requests
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
