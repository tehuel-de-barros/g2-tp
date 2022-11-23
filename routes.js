import  express  from 'express';
import controller from './controllers.js';

const router = express.Router();

router.route('/Prod')
    .get(controller.getAllProd)
    .post(controller.createProd);

router.route('/Prod/:id')
    .put(controller.updateProd)
    .delete(controller.deleteProd)




export default router;
