import express from "express";
import {
  getAllCountries,
  getCountryById,
} from "../controllers/countryController";

const router = express.Router();

router.get("/", getAllCountries);

router.get("/:code/:name", getCountryById);

export { router as countryRoutes };
