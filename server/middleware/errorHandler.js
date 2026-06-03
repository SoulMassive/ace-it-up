export const errorHandler = (err, req, res, next) => {
  console.error('Error stack:', err.stack);
  const statusCode = err.statusCode || 500;
  // Never expose stack traces in production
  const message = process.env.NODE_ENV === 'production' 
    ? 'An error occurred. Please try again.' 
    : err.message;
  res.status(statusCode).json({ error: message });
};
