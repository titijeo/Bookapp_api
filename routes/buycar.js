import express from "express";

import { 
    createCar, 
    updateCar,
    deleteCar, 
     getCar, 
     getCars 
    } from "../controllers/buycar.js";

import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createCar);

//UPDATE
router.put("/:id", verifyAdmin, updateCar);
//DELETE
router.delete("/:id", verifyAdmin, deleteCar);
//GET

router.get("/:id", getCar);
//GET ALL
router.get("/", getCars);

export default router