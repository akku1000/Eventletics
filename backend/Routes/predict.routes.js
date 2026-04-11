import {Router} from 'express'
import {protectRoute} from '../middleware/auth.middleware.js'
import {predict} from '../controllers/predict.controller.js'
const router=Router();

router.get('/',protectRoute,predict);

export default router