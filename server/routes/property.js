import express from 'express';
import propertyController from '../controllers/properties';

const router = express.Router();


// GET all properties list
router.get('/properties', propertyController.getAllProperties);

/* GET property with an id
router.get('/:propertyId', (req, res) => {
  const id = req.params.propertyId;
  if (id === 'sale') {
    res.status(200).json({
      message: 'You discovered the sale property',
      id,
    });
  } else {
    res.status(200).json({
      messsage: 'You passed an ID',
    });
  }
});

router.patch('/:propertyId', (req, res) => {
  res.status(200).json({ message: 'Updated property' });
});

router.delete('/:propertyId', (req, res) => {
  res.status(200).json({ message: 'Delete Successfull' });
});
*/
export default router;
