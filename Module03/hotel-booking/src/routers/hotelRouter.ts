import { Router } from "express";
import {
  searchHotels,
  getHotelById,
  getAllHotels,
  createHotel,
} from "../controllers/hotelController";

const router = Router();

router.get("/search", searchHotels);
router.get("/:id", getHotelById);
router.get("/", getAllHotels);
router.post("/", createHotel);

export { router as hotelRouter };
