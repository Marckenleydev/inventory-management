import { Router } from "express";
import { getExpensesByCategory } from "../controller/expenseController";


const router = Router();
router.get("/", getExpensesByCategory)

export default router;