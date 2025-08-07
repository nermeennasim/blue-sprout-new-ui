// backend/routes/email.js
const express = require("express");
const { Resend } = require("resend");

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/send-email", async (req, res) => {
	console.log("📧 Email send request received");
	console.log("Request body:", req.body);

	try {
		const { name, email, message, subject } = req.body;

		// Validate required fields
		if (!name || !email || !message) {
			console.log("❌ Missing required fields");
			return res.status(400).json({
				success: false,
				error: "Missing required fields: name, email, and message are required",
			});
		}

		// Email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			console.log("❌ Invalid email format");
			return res.status(400).json({
				success: false,
				error: "Invalid email format",
			});
		}

		console.log("✅ Validation passed, sending email...");

		const emailData = {
			from: process.env.FROM_EMAIL || "noreply@bluesproutagency.com",
			to: [process.env.TO_EMAIL || "support@bluesproutagency.com"],
			subject: subject || `New Contact Form Submission from ${name}`,
			html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #555;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject || "No subject provided"}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #555;">Message:</h3>
            <p style="line-height: 1.6; color: #333;">${message.replace(
							/\n/g,
							"<br>"
						)}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #e9f4ff; border-radius: 5px;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              <strong>Reply to this email to respond directly to ${name} at ${email}</strong>
            </p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          
          <p style="font-size: 12px; color: #888; text-align: center;">
            This email was sent from your Blue Sprout Agency contact form.<br>
            Timestamp: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
			reply_to: email, // This allows you to reply directly to the person who submitted the form
		};

		console.log("Sending email with data:", {
			from: emailData.from,
			to: emailData.to,
			subject: emailData.subject,
			reply_to: emailData.reply_to,
		});

		const result = await resend.emails.send(emailData);

		console.log("✅ Email sent successfully:", result);

		res.status(200).json({
			success: true,
			message: "Email sent successfully",
			id: result.id,
		});
	} catch (error) {
		console.error("❌ Email sending failed:", error);

		res.status(500).json({
			success: false,
			error: "Failed to send email",
			details:
				process.env.NODE_ENV === "development" ? error.message : undefined,
		});
	}
});

// Test endpoint
router.get("/test", (req, res) => {
	res.json({
		message: "Email routes are working",
		timestamp: new Date().toISOString(),
		resendConfigured: !!process.env.RESEND_API_KEY,
	});
});

module.exports = router;
