// backend/routes/email.js - SIMPLIFIED VERSION USING MIDDLEWARE
const express = require("express");
const EmailService = require("../services/emailService");

const router = express.Router();
const emailService = new EmailService();

// POST /api/send-email - Main endpoint for contact form
router.post("/send-email", async (req, res) => {
	try {
		// Use the email service middleware to handle everything
		const result = await emailService.sendContactFormEmail(req.body);

		if (result.success) {
			res.status(200).json({
				success: true,
				message: result.message,
				id: result.id,
			});
		} else {
			res.status(400).json({
				error: result.error,
			});
		}
	} catch (error) {
		console.error("💥 Route error:", error);
		res.status(500).json({
			error: "Internal server error. Please try again later.",
		});
	}
});

// GET /api/email-status - Check if email service is configured
router.get("/email-status", async (req, res) => {
	try {
		const status = await emailService.testConfiguration();

		res.status(200).json({
			message: "Email service status",
			timestamp: new Date().toISOString(),
			configured: status.configured,
			missingVariables: status.missingVariables,
			hasApiKey: status.hasApiKey,
		});
	} catch (error) {
		res.status(500).json({
			error: "Failed to check email service status",
			details: error.message,
		});
	}
});

// GET /api/test-email - Simple test endpoint
router.get("/test-email", (req, res) => {
	res.json({
		message: "Email API is working!",
		timestamp: new Date().toISOString(),
		endpoints: {
			sendEmail: "POST /api/send-email",
			emailStatus: "GET /api/email-status",
		},
	});
});

module.exports = router;
