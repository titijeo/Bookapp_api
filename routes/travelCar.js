import express from "express";
import { createTravelCar, 
    deleteTravelCar, getTravelCar,
     getTravelCars, 
     updateTravelCar 
    } from "../controllers/travelCar.js";
import TravelCar from "../models/TravelCar.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createTravelCar);

//UPDATE
router.put("/:id", verifyAdmin, updateTravelCar);
//DELETE
router.delete("/:id", verifyAdmin, deleteTravelCar);
//GET

router.get("/:id", getTravelCar);
//GET ALL
router.get("/", getTravelCars);

export default router