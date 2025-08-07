// backend/services/emailService.js
// Complete EmailService class with reply-to customer email fix

const { Resend } = require("resend");

class EmailService {
	constructor() {
		console.log("🚀 Initializing EmailService...");

		this.resend = new Resend(process.env.RESEND_API_KEY);
		this.fromEmail = process.env.FROM_EMAIL;
		this.toEmail = process.env.TO_EMAIL;
		this.replyEmail = process.env.REPLY_EMAIL;
		this.businessName = process.env.BUSINESS_NAME || "Blue Sprout Agency";

		console.log("⚙️ EmailService configuration loaded:", {
			hasApiKey: !!process.env.RESEND_API_KEY,
			fromEmail: this.fromEmail,
			toEmail: this.toEmail,
			replyEmail: this.replyEmail,
			businessName: this.businessName,
			timestamp: new Date().toISOString(),
		});

		// Warn about missing critical configuration
		if (!process.env.RESEND_API_KEY) {
			console.error(
				"⚠️ CRITICAL: RESEND_API_KEY not found in environment variables!"
			);
		}
		if (!this.fromEmail || !this.toEmail || !this.replyEmail) {
			console.warn("⚠️ WARNING: Some email addresses not configured:", {
				missingFromEmail: !this.fromEmail,
				missingToEmail: !this.toEmail,
				missingReplyEmail: !this.replyEmail,
			});
		}

		console.log("✅ EmailService initialized successfully");
	}

	// Validate email format
	isValidEmail(email) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}

	// Sanitize input to prevent XSS
	sanitizeInput(input) {
		if (typeof input !== "string") return "";
		return input
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#x27;")
			.replace(/\//g, "&#x2F;");
	}

	// Validate form data
	validateFormData(data) {
		console.log("🔍 Starting form validation for data:", {
			hasName: !!data.name,
			hasEmail: !!data.email,
			hasMessage: !!data.message,
			nameLength: data.name?.length,
			emailFormat: this.isValidEmail(data.email),
			messageLength: data.message?.length,
		});

		const { name, email, message } = data;
		const errors = [];

		if (!name || name.trim().length < 2) {
			errors.push("Name must be at least 2 characters long");
			console.warn("❌ Validation failed: Invalid name", {
				name: name?.substring(0, 10),
			});
		}

		if (!email || !this.isValidEmail(email)) {
			errors.push("Please provide a valid email address");
			console.warn("❌ Validation failed: Invalid email", {
				email: email?.substring(0, 20),
			});
		}

		if (!message || message.trim().length < 10) {
			errors.push("Message must be at least 10 characters long");
			console.warn("❌ Validation failed: Message too short", {
				messageLength: message?.length,
			});
		}

		if (message && message.length > 5000) {
			errors.push("Message is too long. Please keep it under 5000 characters");
			console.warn("❌ Validation failed: Message too long", {
				messageLength: message?.length,
			});
		}

		const validationResult = {
			isValid: errors.length === 0,
			errors,
		};

		console.log("✅ Form validation completed:", {
			isValid: validationResult.isValid,
			errorCount: errors.length,
			errors: errors,
		});

		return validationResult;
	}

	// Generate business notification email HTML
	generateBusinessEmailHTML(
		sanitizedName,
		email,
		sanitizedMessage,
		sanitizedPhone
	) {
		return `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">🌱 ${this.businessName}</h1>
          <p style="color: #e2e8f0; margin: 10px 0 0 0; font-size: 16px;">New Contact Form Submission</p>
        </div>
        
        <div style="background-color: white; padding: 40px; margin: 0;">
          <div style="background-color: #f1f5f9; padding: 25px; border-radius: 12px; border-left: 4px solid #3b82f6;">
            <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 20px;">Contact Details</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #475569; display: inline-block; width: 80px;">Name:</strong>
              <span style="color: #1e293b; font-size: 16px;">${sanitizedName}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #475569; display: inline-block; width: 80px;">Email:</strong>
              <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none; font-size: 16px;">${email}</a>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #475569; display: inline-block; width: 80px;">Phone:</strong>
              <span style="color: #1e293b; font-size: 16px;">${sanitizedPhone}</span>
            </div>
            
            <div>
              <strong style="color: #475569; display: block; margin-bottom: 10px;">Message:</strong>
              <div style="background-color: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; line-height: 1.6; color: #1e293b;">
                ${sanitizedMessage.replace(/\n/g, "<br>")}
              </div>
            </div>
          </div>
          
          <div style="margin-top: 30px; text-align: center;">
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin-bottom: 15px;">
              <p style="color: #0c4a6e; margin: 0; font-weight: 500; font-size: 16px;">
                💡 <strong>Pro Tip:</strong> Click "Reply" to respond directly to ${sanitizedName}
              </p>
            </div>
            <a href="mailto:${email}" style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: white; padding: 12px 30px; border-radius: 6px; text-decoration: none; font-weight: 500; display: inline-block;">
              Reply to ${sanitizedName}
            </a>
          </div>
        </div>
        
        <div style="background-color: #f1f5f9; padding: 20px; text-align: center; color: #64748b; font-size: 14px;">
          <p style="margin: 0;">This message was sent through your website contact form</p>
          <p style="margin: 5px 0 0 0;">Received: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `;
	}

	// Generate user confirmation email HTML
	generateConfirmationEmailHTML(sanitizedName, sanitizedMessage) {
		return `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc;">
        <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">🌱 ${this.businessName}</h1>
          <p style="color: #d1fae5; margin: 10px 0 0 0; font-size: 16px;">Thank you for reaching out!</p>
        </div>
        
        <div style="background-color: white; padding: 40px;">
          <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 24px;">Hi ${sanitizedName}! 👋</h2>
          
          <p style="color: #475569; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            Thank you for contacting us! We've received your message and our team will get back to you within 24 hours.
          </p>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin: 25px 0;">
            <p style="color: #0c4a6e; margin: 0; font-weight: 500;">Your message:</p>
            <p style="color: #0369a1; margin: 10px 0 0 0; font-style: italic; line-height: 1.5;">
              "${sanitizedMessage}"
            </p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 25px 0;">
            <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">What happens next?</h3>
            <ul style="color: #475569; margin: 0; padding-left: 20px; line-height: 1.6;">
              <li>Our team will review your message</li>
              <li>We'll respond within 24 hours (usually much sooner!)</li>
              <li>We'll discuss how we can help grow your business</li>
            </ul>
          </div>
          
          <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin: 25px 0;">
            <h3 style="color: #1e40af; margin: 0 0 15px 0; font-size: 18px;">Need immediate assistance?</h3>
            <p style="color: #1e40af; margin: 0;">
              <strong>Call us:</strong> <a href="tel:+16572174737" style="color: #1e40af;">(657) 217-4737</a><br>
              <strong>Schedule directly:</strong> Look for our floating "Schedule Free Call" button
            </p>
          </div>
          
          <p style="color: #475569; font-size: 16px; line-height: 1.6; margin-top: 30px;">
            Best regards,<br>
            <strong style="color: #1e293b;">The ${this.businessName} Team</strong>
          </p>
        </div>
        
        <div style="background-color: #f1f5f9; padding: 20px; text-align: center; color: #64748b; font-size: 14px;">
          <p style="margin: 0;">This is an automated confirmation email</p>
          <p style="margin: 5px 0 0 0;">Please don't reply to this email - we'll contact you directly</p>
        </div>
      </div>
    `;
	}

	// Main method to send contact form emails - UPDATED WITH REPLY-TO
	async sendContactFormEmail(formData) {
		const requestId = `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
		const startTime = Date.now();

		try {
			console.log(`🚀 [${requestId}] Starting email processing...`);
			console.log(`📧 [${requestId}] Processing email request:`, {
				name: formData.name,
				email: formData.email,
				phone: formData.phone,
				messageLength: formData.message?.length,
				timestamp: new Date().toISOString(),
			});

			// Validate form data
			console.log(`🔍 [${requestId}] Validating form data...`);
			const validation = this.validateFormData(formData);
			if (!validation.isValid) {
				console.warn(
					`❌ [${requestId}] Form validation failed:`,
					validation.errors
				);
				return {
					success: false,
					error: validation.errors.join(", "),
				};
			}
			console.log(`✅ [${requestId}] Form validation passed`);

			const { name, email, message, phone } = formData;

			// Sanitize inputs
			console.log(`🧹 [${requestId}] Sanitizing input data...`);
			const sanitizedName = this.sanitizeInput(name);
			const sanitizedMessage = this.sanitizeInput(message);
			const sanitizedPhone = this.sanitizeInput(phone || "Not provided");
			console.log(`✅ [${requestId}] Input sanitization completed`);

			// Log email configuration being used
			console.log(`⚙️ [${requestId}] Email configuration:`, {
				fromEmail: this.fromEmail,
				toEmail: this.toEmail,
				replyToEmail: email, // Customer's email for reply-to
				businessName: this.businessName,
			});

			console.log(`📤 [${requestId}] Sending business notification email...`);
			const businessEmailStart = Date.now();

			// Send notification email to business - WITH REPLY-TO CUSTOMER EMAIL
			const { data: businessEmailData, error: businessEmailError } =
				await this.resend.emails.send({
					from: this.fromEmail, // Your verified domain email (noreply@bluesproutagency.com)
					to: [this.toEmail], // Your business email (support@bluesproutagency.com)
					reply_to: email, // 🔥 CUSTOMER'S EMAIL - When you hit Reply, goes to customer!
					subject: `🌱 New Contact: ${sanitizedName} - ${email}`, // Include customer email in subject
					html: this.generateBusinessEmailHTML(
						sanitizedName,
						email,
						sanitizedMessage,
						sanitizedPhone
					),
				});

			const businessEmailDuration = Date.now() - businessEmailStart;

			if (businessEmailError) {
				console.error(
					`❌ [${requestId}] Business email failed after ${businessEmailDuration}ms:`,
					{
						error: businessEmailError,
						errorType: typeof businessEmailError,
						errorDetails: JSON.stringify(businessEmailError, null, 2),
					}
				);
				return {
					success: false,
					error: "Failed to send email. Please try again later.",
				};
			}

			console.log(
				`✅ [${requestId}] Business email sent successfully in ${businessEmailDuration}ms:`,
				{
					emailId: businessEmailData?.id,
					to: this.toEmail,
					from: this.fromEmail,
					replyTo: email, // Log the reply-to address
				}
			);

			// Send confirmation email to user
			try {
				console.log(`📤 [${requestId}] Sending confirmation email to user...`);
				const confirmationEmailStart = Date.now();

				const { data: confirmationData, error: confirmationError } =
					await this.resend.emails.send({
						from: this.fromEmail, // Your verified domain
						to: [email], // Customer's email
						reply_to: this.toEmail, // Business email for replies to confirmations
						subject: `🌱 Thank you for contacting ${this.businessName}!`,
						html: this.generateConfirmationEmailHTML(
							sanitizedName,
							sanitizedMessage
						),
					});

				const confirmationEmailDuration = Date.now() - confirmationEmailStart;

				if (confirmationError) {
					console.warn(
						`⚠️ [${requestId}] Confirmation email failed after ${confirmationEmailDuration}ms:`,
						{
							error: confirmationError,
							userEmail: email,
							fromEmail: this.fromEmail,
						}
					);
				} else {
					console.log(
						`✅ [${requestId}] Confirmation email sent successfully in ${confirmationEmailDuration}ms:`,
						{
							emailId: confirmationData?.id,
							to: email,
							from: this.fromEmail,
						}
					);
				}
			} catch (confirmationErr) {
				console.warn(`⚠️ [${requestId}] Confirmation email exception:`, {
					error: confirmationErr.message,
					stack: confirmationErr.stack,
					userEmail: email,
				});
				// Continue - main email was sent successfully
			}

			const totalDuration = Date.now() - startTime;
			console.log(
				`🎉 [${requestId}] Email processing completed successfully in ${totalDuration}ms:`,
				{
					businessEmailId: businessEmailData?.id,
					totalDuration: `${totalDuration}ms`,
					timestamp: new Date().toISOString(),
				}
			);

			return {
				success: true,
				message: "Email sent successfully!",
				id: businessEmailData?.id,
			};
		} catch (error) {
			const totalDuration = Date.now() - startTime;
			console.error(
				`💥 [${requestId}] Email service error after ${totalDuration}ms:`,
				{
					error: error.message,
					stack: error.stack,
					formData: {
						name: formData.name,
						email: formData.email,
						messageLength: formData.message?.length,
					},
					emailConfig: {
						hasApiKey: !!process.env.RESEND_API_KEY,
						fromEmail: this.fromEmail,
						toEmail: this.toEmail,
					},
					timestamp: new Date().toISOString(),
				}
			);

			return {
				success: false,
				error: "Internal server error. Please try again later.",
			};
		}
	}

	// Test method to check if service is configured properly
	async testConfiguration() {
		console.log("🔧 Testing email service configuration...");

		const missingVars = [];

		console.log("🔍 Checking environment variables:");

		if (!process.env.RESEND_API_KEY) {
			missingVars.push("RESEND_API_KEY");
			console.error("❌ Missing RESEND_API_KEY");
		} else {
			console.log("✅ RESEND_API_KEY is set");
		}

		if (!this.fromEmail) {
			missingVars.push("FROM_EMAIL");
			console.error("❌ Missing FROM_EMAIL");
		} else {
			console.log("✅ FROM_EMAIL is set:", this.fromEmail);
		}

		if (!this.toEmail) {
			missingVars.push("TO_EMAIL");
			console.error("❌ Missing TO_EMAIL");
		} else {
			console.log("✅ TO_EMAIL is set:", this.toEmail);
		}

		if (!this.replyEmail) {
			missingVars.push("REPLY_EMAIL");
			console.error("❌ Missing REPLY_EMAIL");
		} else {
			console.log("✅ REPLY_EMAIL is set:", this.replyEmail);
		}

		console.log("🔧 Additional configuration:");
		console.log("- Business Name:", this.businessName);
		console.log(
			"- Resend Client:",
			this.resend ? "Initialized" : "Not initialized"
		);

		const result = {
			configured: missingVars.length === 0,
			missingVariables: missingVars,
			hasApiKey: !!process.env.RESEND_API_KEY,
			configuration: {
				fromEmail: this.fromEmail,
				toEmail: this.toEmail,
				replyEmail: this.replyEmail,
				businessName: this.businessName,
			},
		};

		console.log("🎯 Configuration test result:", {
			configured: result.configured,
			missingVars: missingVars.length,
			timestamp: new Date().toISOString(),
		});

		return result;
	}
}

module.exports = EmailService;
