// server.js - FINAL WORKING VERSION
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const emailRoutes = require("./routes/email");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// CORS configuration
const corsOptions = {
	origin:
		process.env.NODE_ENV === "production"
			? [process.env.FRONTEND_URL]
			: [
					"http://localhost:5174",
					"http://localhost:3000",
					"http://127.0.0.1:5173",
				],
	credentials: true,
	optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Routes
app.use("/api", emailRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
	res.status(200).json({
		status: "OK",
		timestamp: new Date().toISOString(),
		environment: process.env.NODE_ENV || "development",
	});
});

// Root endpoint
app.get("/", (req, res) => {
	res.json({
		message: "Blue Sprout Agency API Server",
		version: "1.0.0",
		endpoints: {
			health: "/health",
			sendEmail: "POST /api/send-email",
		},
	});
});

// Error handling middleware
app.use((err, req, res, next) => {
	console.error("Error:", err.stack);
	res.status(500).json({
		error: "Something went wrong!",
		message:
			process.env.NODE_ENV === "development"
				? err.message
				: "Internal server error",
	});
});

// 404 handler - FIXED VERSION (removed the problematic "*")
app.use((req, res) => {
	res.status(404).json({
		error: "Route not found",
		path: req.originalUrl,
	});
});

// Start server
app.listen(PORT, () => {
	console.log(`🚀 Server running on port ${PORT}`);
	console.log(
		`📧 Email API available at http://localhost:${PORT}/api/send-email`
	);
	console.log(`🏥 Health check at http://localhost:${PORT}/health`);
	console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);

	// Check if Resend API key is configured
	if (!process.env.RESEND_API_KEY) {
		console.warn(
			"⚠️  WARNING: RESEND_API_KEY not found in environment variables"
		);
	} else {
		console.log("✅ Resend API key configured");
	}
});

module.exports = app;
