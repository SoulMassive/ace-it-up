import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters'],
    match: [/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    maxlength: [254, 'Email too long'],
  },
  phone: {
    type: String,
    trim: true,
    match: [/^[\d\s\+\-\(\)]{7,20}$/, 'Invalid phone number'],
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [1000, 'Message cannot exceed 1000 characters'],
  },
  ipAddress: { type: String },  // logged for abuse prevention
  createdAt: { type: Date, default: Date.now },
});

// TTL: auto-delete after 1 year (data minimisation)
contactSchema.index({ createdAt: 1 }, { expireAfterSeconds: 31536000 });

export default mongoose.model('Contact', contactSchema);
