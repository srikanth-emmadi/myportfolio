import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: { name: "Portfolio Contact", email: process.env.MAIL_USER },
        to: [{ email: process.env.MAIL_USER }],

        subject,
        htmlContent: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Email sent:", response.data);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ Error sending email:", error.response?.data || error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
