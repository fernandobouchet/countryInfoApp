import { Request, Response } from "express";

const getAllCountries = async (_req: Request, res: Response) => {
  try {
    const response = await fetch(
      `${process.env.COUNTRIES_API_URL}/AvailableCountries`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch countries: ${response.status} ${response.statusText}`
      );
    }

    const countries = await response.json();
    res.status(200).json(countries);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ message: error.message });
    } else {
      res.status(500).send({ error: "Unknown error occurred" });
    }
    console.log(error);
  }
};

export { getAllCountries };
