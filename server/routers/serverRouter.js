import express from 'express';
import { pingServerController } from '../controllers/serverController.js';

const router = express.Router();

router.get('/test-ping', pingServerController)

export default router;