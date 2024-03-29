import nodemailer from "nodemailer";

async function sendEmail(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, phone, message } = req.body; // Add or remove fields as needed

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_EMAIL_PASS, // Use OAuth2 or app-specific password for better security
    },
  });

  const mailOptions = {
    from: `DTMDGROUP@outlook.com.au`, // This should be the same email as your auth.user email
    to: `${email}`, // The email that will receive the contact form data
    subject: "Customer Inquiry from Website",
    text: `You have a new contact form submission from:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    html: `
        <h1>You have a new contact form submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", result);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).json({ message: "Failed to send email" });
  }
}

export default sendEmail;
