import {Router} from 'express'
import {protectRoute} from '../middleware/auth.middleware.js'
import {predict} from '../Controller/predict.controller.js'
const router=Router();

router.post('/',protectRoute,predict);

export default router