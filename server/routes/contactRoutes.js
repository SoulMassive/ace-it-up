import express from 'express';
import { validateContact, submitContact } from '../controllers/contactController.js';

const router = express.Router();
router.post('/', validateContact, submitContact);
export default router;
