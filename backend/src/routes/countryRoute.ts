import express from "express";
import { getAllCountries } from "../controllers/countryController";

const router = express.Router();

router.get("/", getAllCountries);

router.get("/:id/borders");

router.get("/:id/population");

router.get("/:id/flag");

export { router as countryRoutes };
