import express, { Response, Request } from "express";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(PORT, () => console.log(`Server running on port:${PORT}`));
