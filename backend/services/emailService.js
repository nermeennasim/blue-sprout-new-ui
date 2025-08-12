// backend/services/emailService.js - FIXED EMAIL ROUTING
const { Resend } = require("resend");

class EmailService {
  constructor() {
    console.log("🚀 Initializing EmailService...");
    
    this.resend = new Resend(process.env.RESEND_API_KEY);
    this.businessEmail = process.env.FROM_EMAIL || "support@bluesproutagency.com"; // Your verified email
    this.businessName = process.env.BUSINESS_NAME || "Blue Sprout Agency LLC";
    this.toEmail = process.env.TO_EMAIL || "support@bluesproutagency.com"; // Where business notifications go
    
    console.log("✅ EmailService initialized:", {
      hasApiKey: !!process.env.RESEND_API_KEY,
      businessEmail: this.businessEmail,
      businessName: this.businessName,
      toEmail: this.toEmail
    });
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
      .replace(/'/g, "&#x27;");
  }

  // Generate business notification email HTML
  generateBusinessEmailHTML(name, email, message, phone, subject) {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333; border-bottom: 3px solid #007bff; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #555;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
            <p><strong>Phone:</strong> ${phone !== "Not provided" ? `<a href="tel:${phone}" style="color: #007bff;">${phone}</a>` : phone}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #28a745; margin: 20px 0; border-radius: 5px;">
            <h3 style="margin-top: 0; color: #555;">Message:</h3>
            <p style="line-height: 1.6; color: #333; font-size: 16px;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="background-color: #e7f3ff; padding: 15px; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #0056b3; font-weight: bold;">
              Click "Reply" to respond directly to ${name}
            </p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          
          <p style="font-size: 12px; color: #888; text-align: center;">
            Received: ${new Date().toLocaleString()}<br>
            ${this.businessName} Contact Form
          </p>
        </div>
      </div>
    `;
  }

  // Generate customer confirmation email HTML
  generateCustomerEmailHTML(name, message) {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <div style="padding: 40px 30px;">
          <h2 style="color: #333333; margin-bottom: 20px;">Thank You, ${name}!</h2>
          
          <p style="font-size: 16px; color: #333333; line-height: 1.6; margin-bottom: 20px;">
            Thank you for reaching out to ${this.businessName}. We have received your message and our team will get back to you within 24 hours.
          </p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #555555; font-size: 16px;">Your Message:</h3>
            <p style="color: #666666; font-style: italic; line-height: 1.5; margin: 0;">
              "${message}"
            </p>
          </div>
          
          <div style="margin: 30px 0;">
            <h3 style="color: #333333; font-size: 16px;">What happens next?</h3>
            <ul style="color: #333333; line-height: 1.6; padding-left: 20px;">
              <li>Our team will review your message</li>
              <li>We will respond within 24 hours</li>
              <li>We will discuss how we can help your business</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <p style="color: #333; font-size: 16px;">
              <strong>Need immediate assistance?</strong><br>
              <a href="mailto:${this.businessEmail}" style="color: #007bff;">${this.businessEmail}</a>
            </p>
          </div>
          
          <div style="border-top: 1px solid #eeeeee; padding-top: 20px; margin-top: 30px;">
            <p style="color: #666666; font-size: 14px; margin: 0;">
              Best regards,<br>
              The ${this.businessName} Team<br>
              <a href="https://bluesproutagency.com" style="color: #007bff;">bluesproutagency.com</a>
            </p>
          </div>
        </div>
      </div>
    `;
  }

  // Main method to send contact form emails
  async sendContactFormEmail(formData) {
    try {
      console.log('📧 Processing contact form submission...');
      console.log('📧 Form data received:', formData);
      
      const { name, email, message, phone, subject } = formData;

      // Basic validation
      if (!name || !email || !message) {
        return {
          success: false,
          error: "Missing required fields: name, email, and message are required"
        };
      }

      if (!this.isValidEmail(email)) {
        return {
          success: false,
          error: "Invalid email format"
        };
      }

      // Sanitize inputs
      const sanitizedName = this.sanitizeInput(name);
      const sanitizedMessage = this.sanitizeInput(message);
      const sanitizedPhone = this.sanitizeInput(phone || "Not provided");
      const sanitizedSubject = this.sanitizeInput(subject || "No subject");

      console.log('✅ Validation passed, sending emails...');

      // ✅ EMAIL 1: Send notification TO BUSINESS (support@bluesproutagency.com)
      const businessEmailData = {
        from: this.businessEmail, // FROM: support@bluesproutagency.com
        to: this.toEmail,         // TO: support@bluesproutagency.com (business receives notification)
        reply_to: email,          // REPLY-TO: customer's email (so you can reply directly)
        subject: `New Contact Form Submission from ${sanitizedName}`,
        html: this.generateBusinessEmailHTML(sanitizedName, email, sanitizedMessage, sanitizedPhone, sanitizedSubject)
      };

      console.log('📤 Sending business notification TO:', this.toEmail);
      console.log('📤 Business email data:', {
        from: businessEmailData.from,
        to: businessEmailData.to,
        reply_to: businessEmailData.reply_to,
        subject: businessEmailData.subject
      });

      const businessResult = await this.resend.emails.send(businessEmailData);

      if (businessResult.error) {
        console.error('❌ Business email failed:', businessResult.error);
        return {
          success: false,
          error: "Failed to send notification email"
        };
      }

      console.log('✅ Business notification sent to', this.toEmail, '- ID:', businessResult.data?.id);

      // ✅ EMAIL 2: Send confirmation TO CUSTOMER (customer's email address)
      const customerEmailData = {
        from: this.businessEmail,  // FROM: support@bluesproutagency.com
        to: email,                 // TO: customer's email (they get confirmation)
        reply_to: this.businessEmail, // REPLY-TO: support@bluesproutagency.com
        subject: `Thank you for contacting ${this.businessName}`,
        html: this.generateCustomerEmailHTML(sanitizedName, sanitizedMessage)
      };

      console.log('📤 Sending customer confirmation TO:', email);
      console.log('📤 Customer email data:', {
        from: customerEmailData.from,
        to: customerEmailData.to,
        reply_to: customerEmailData.reply_to,
        subject: customerEmailData.subject
      });

      const customerResult = await this.resend.emails.send(customerEmailData);

      if (customerResult.error) {
        console.warn('⚠️ Customer confirmation failed:', customerResult.error);
        // Don't fail the request if confirmation fails
      } else {
        console.log('✅ Customer confirmation sent to', email, '- ID:', customerResult.data?.id);
      }

      return {
        success: true,
        message: "Emails sent successfully!",
        businessEmailId: businessResult.data?.id,
        customerEmailId: customerResult.data?.id || null
      };

    } catch (error) {
      console.error('❌ EmailService error:', error);
      return {
        success: false,
        error: "Internal server error. Please try again later."
      };
    }
  }

  // Test configuration
  async testConfiguration() {
    console.log("🔧 Testing email service configuration...");
    
    const result = {
      configured: !!process.env.RESEND_API_KEY,
      hasApiKey: !!process.env.RESEND_API_KEY,
      businessEmail: this.businessEmail,
      businessName: this.businessName,
      toEmail: this.toEmail
    };

    console.log("📊 Configuration result:", result);
    return result;
  }
}

module.exports = EmailService;