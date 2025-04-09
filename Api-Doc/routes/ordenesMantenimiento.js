import express from 'express';
const route = express.Router();
import ordenController from '../controllers/ordenesMantenimiento.js';


route.post('/', ordenController.create);
route.get('/', ordenController.getAll);
route.get('/:id', ordenController.getOne);
route.put('/:id', ordenController.update);
route.delete('/:id', ordenController.delete);

export default route;