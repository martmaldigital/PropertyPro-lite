import express from 'express';
import propsController from '../controllers/properties';

const router = express.Router();


// GET all properties list
router.get('/property', propsController.getAll);
router.get('/property/:id', propsController.getById);


export default router;
