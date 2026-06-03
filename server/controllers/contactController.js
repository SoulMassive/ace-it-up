import { body, validationResult } from 'express-validator';
import Contact from '../models/Contact.js';

export const validateContact = [
  body('name').trim().notEmpty().isLength({ max: 100 }).escape(),
  body('email').isEmail().normalizeEmail(),
  body('phone').optional({ checkFalsy: true }).isMobilePhone(),
  body('message').trim().notEmpty().isLength({ max: 1000 }).escape(),
];

export const submitContact = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { name, email, phone, message } = req.body;
    const ip = req.ip || req.connection.remoteAddress;

    const contact = await Contact.create({ name, email, phone, message, ipAddress: ip });

    res.status(201).json({
      success: true,
      message: 'Thank you! We will get back to you shortly.',
    });
  } catch (err) {
    next(err);
  }
};
