import dotenv from 'dotenv';
dotenv.config();

const requiredEnv = ['MONGODB_URI', 'ALLOWED_ORIGINS'];

for (const envVar of requiredEnv) {
  if (!process.env[envVar]) {
    console.warn(`Warning: Environment variable ${envVar} is missing!`);
  }
}

export const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT, 10) || 5000,
  mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/aceitup',
  allowedOrigins: (process.env.ALLOWED_ORIGINS || 'http://localhost:5173').split(','),
  jwtSecret: process.env.JWT_SECRET || 'replace_with_long_random_secret_min_32_chars',
  smtpHost: process.env.SMTP_HOST || '',
  smtpPort: parseInt(process.env.SMTP_PORT, 10) || 587,
  smtpUser: process.env.SMTP_USER || '',
  smtpPass: process.env.SMTP_PASS || '',
  contactRecipientEmail: process.env.CONTACT_RECIPIENT_EMAIL || 'info@aceitup.com',
};
