import express from 'express';
import { test } from '../controllers/test.js';
import { signUp, signin } from '../controllers/userController.js';

const router = express.Router();

// Test
router.get('/test', test);

                     // User routes
// User signup
router.post('/api/auth/signup', signUp);

// User signin
router.post('/api/auth/signin', signin);

export default router;
