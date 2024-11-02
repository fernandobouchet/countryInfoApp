import "dotenv/config";
import express from "express";
import { countryRoutes } from "./routes/countryRoute";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.use("/api/v1/countries", countryRoutes);

app.listen(PORT, () => console.log(`Server running on port:${PORT}`));
