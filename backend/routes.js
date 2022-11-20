import  express  from 'express';
import controller from './controllers.js';

const router = express.Router();

router.route('/Prod')
    .post(controller.createProd);





export default router;
