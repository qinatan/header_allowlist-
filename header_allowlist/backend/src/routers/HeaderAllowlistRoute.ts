import express from "express"; 
import HeaderAllowlistController from "../controller/HeaderAllowlistController"; 

const router = express.Router()
router.post("/header", HeaderAllowlistController.createHeaderAllowlist)

export default router; 