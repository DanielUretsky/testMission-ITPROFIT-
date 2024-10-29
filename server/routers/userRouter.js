import express from 'express';

import { sendFeedbackContorller } from '../controllers/userController.js';
import { validationMiddleware } from '../middlewares/validationMiddleware.js';

const router = express.Router();

router.post('/send-feedback', validationMiddleware, sendFeedbackContorller)

export default router;