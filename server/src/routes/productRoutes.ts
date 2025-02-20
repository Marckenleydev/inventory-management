import { getProducts, createProduct } from './../controller/productController';
import { Router } from "express";



const router = Router();
router.get("/", getProducts);
router.post("/", createProduct);

export default router;