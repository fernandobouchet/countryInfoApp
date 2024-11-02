import express from "express";

const router = express.Router();

router.get("/");

router.get("/:id/borders");

router.get("/:id/population");

router.get("/:id/flag");
