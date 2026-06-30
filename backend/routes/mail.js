import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_USER,
      subject: subject,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("Email sent:", info.response);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error); // 👈 log the real error
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
