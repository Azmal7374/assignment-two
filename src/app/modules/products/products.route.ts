import express from 'express';
import { ProductController } from './products.controller';

const router = express.Router();

router.post('/', ProductController.createProduct);
router.get('/', ProductController.getAllProducts);
router.get('/:productId', ProductController.getSingleProduct);

// router.post("/:productId", ProductController);
// router.delete('/:productId', ProductController.deleteProduct);

export const ProductRoutes = router;
