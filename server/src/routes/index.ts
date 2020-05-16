import { Router } from 'express';
import UserRouter from './Users';

// Init router and path
const router = Router();

// Add sub-api
router.use('/users', UserRouter);

// Export the base-router
export default router;
