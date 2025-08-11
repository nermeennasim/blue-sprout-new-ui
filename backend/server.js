// backend/server.js
require('dotenv').config();

console.log('🔧 Environment variables loaded:');
console.log('- NODE_ENV:', process.env.NODE_ENV || 'development');
console.log('- PORT:', process.env.PORT || 3001);
console.log('- RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);
console.log('- FROM_EMAIL:', process.env.FROM_EMAIL);
console.log('- TO_EMAIL:', process.env.TO_EMAIL);

const express = require('express');
const cors = require('cors');
const emailRoutes = require('./routes/email');

const app = express();
const PORT = process.env.PORT || 3001;

// CORS Configuration
app.use(cors({
  origin: [
    'http://localhost:5173', // Vite dev server
    'http://localhost:3000', // Alternative React dev server
    'https://bluesproutagency.com', // Production domain
    'https://www.bluesproutagency.com' // Production www domain
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  if (req.body && Object.keys(req.body).length > 0) {
    console.log('Request body:', req.body);
  }
  next();
});

// Routes
app.use('/api', emailRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    port: PORT,
    envLoaded: !!process.env.RESEND_API_KEY,
    fromEmail: process.env.FROM_EMAIL,
    toEmail: process.env.TO_EMAIL
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    path: req.path,
    method: req.method
  });
});

// Error handler
app.use((error, req, res, next) => {
  console.error('Server Error:', error);
  res.status(500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
  console.log(`📧 Email API endpoint: http://localhost:${PORT}/api/send-email`);
  console.log(`🔍 Health check: http://localhost:${PORT}/health`);
  console.log(`⚙️ Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;