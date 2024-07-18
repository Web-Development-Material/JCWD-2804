import { Request, Response } from "express";
import { db } from "../config/database";
import { Hotel } from "../models/Hotel";

export const getAllHotels = async (req: Request, res: Response) => {
  try {
    const [rows]: any = await db.query("SELECT * FROM Hotel");
    const hotels: Hotel[] = rows.map((row: any) => ({
      hotel_id: row.hotel_id,
      hotel_name: row.hotel_name,
      location: row.location,
      price_per_night: row.price_per_night,
    }));
    res.json(hotels);
  } catch (error) {
    console.error("Error fetching hotels:", error);
    res.status(500).json({ error: "Failed to fetch hotels" });
  }
};

export const getHotelById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const [rows]: any = await db.query(
      "SELECT * FROM Hotel WHERE hotel_id = ?",
      [id]
    );

    if (rows.length === 0) {
      res.status(404).json({ error: "Hotel not found" });
    } else {
      const hotel: Hotel = {
        hotel_id: rows[0].hotel_id,
        hotel_name: rows[0].hotel_name,
        location: rows[0].location,
        price_per_night: rows[0].price_per_night,
      };
      res.json(hotel);
    }
  } catch (error) {
    console.error("Error fetching hotel:", error);
    res.status(500).json({ error: "Failed to fetch hotel" });
  }
};

export const searchHotels = async (req: Request, res: Response) => {
  const { location } = req.query;

  try {
    const [rows]: any = await db.query(
      "SELECT * FROM Hotel WHERE location LIKE ?",
      [`%${location}%`]
    );
    const hotels: Hotel[] = rows.map((row: any) => ({
      hotel_id: row.hotel_id,
      hotel_name: row.hotel_name,
      location: row.location,
      price_per_night: row.price_per_night,
    }));
    res.json(hotels);
  } catch (error) {
    console.error("Error fetching hotels:", error);
    res.status(500).json({ error: "Failed to fetch hotels" });
  }
};

export const createHotel = async (req: Request, res: Response) => {
  const { hotel_name, location, price_per_night } = req.body;

  try {
    const result: any = await db.query(
      "INSERT INTO Hotel (hotel_name, location, price_per_night) VALUES (?, ?, ?)",
      [hotel_name, location, price_per_night]
    );

    const newHotel: Hotel = {
      hotel_id: result.insertId,
      hotel_name,
      location,
      price_per_night,
    };

    res.status(201).json(newHotel);
  } catch (error) {
    console.error("Error creating hotel:", error);
    res.status(500).json({ error: "Failed to create hotel" });
  }
};
