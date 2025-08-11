// backend/routes/email.js - CORRECT VERSION
const express = require("express");
const EmailService = require("../services/emailService");

const router = express.Router();
const emailService = new EmailService();

router.post("/send-email", async (req, res) => {
	console.log("📧 Email send request received");
	console.log("Request body:", req.body);

	try {
		// Use the EmailService to send emails
		const result = await emailService.sendContactFormEmail(req.body);

		if (result.success) {
			res.status(200).json(result);
		} else {
			res.status(400).json(result);
		}
	} catch (error) {
		console.error("❌ Email route error:", error);

		res.status(500).json({
			success: false,
			error: "Failed to send emails. Please try again.",
			details:
				process.env.NODE_ENV === "development" ? error.message : undefined,
		});
	}
});

// Test endpoint
router.get("/test", async (req, res) => {
	try {
		const config = await emailService.testConfiguration();
		res.json({
			message: "Email routes are working",
			timestamp: new Date().toISOString(),
			configuration: config,
		});
	} catch (error) {
		res.status(500).json({
			message: "Email service test failed",
			error: error.message,
		});
	}
});

module.exports = router;
