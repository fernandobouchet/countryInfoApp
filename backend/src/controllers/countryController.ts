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

const getCountryById = async (req: Request, res: Response) => {
  try {
    const countryCode = req.params.code;
    const countryName = req.params.name;

    const [
      countryInfoResponse,
      countryFlagResponse,
      countryPopulationResponse,
    ] = await Promise.all([
      fetch(`${process.env.COUNTRIES_API_URL}/CountryInfo/${countryCode}`).then(
        (response) => {
          if (!response.ok) {
            throw new Error(
              `Failed to fetch country info: ${response.status} ${response.statusText}`
            );
          }
          return response.json();
        }
      ),

      fetch(`${process.env.POPULATION_FLAGS_API_URL}/flag/images`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ iso2: countryCode }),
      }).then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch country flag: ${response.status} ${response.statusText}`
          );
        }
        return response.json();
      }),

      fetch(`${process.env.POPULATION_FLAGS_API_URL}/population`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ country: countryName }),
      }).then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch country population: ${response.status} ${response.statusText}`
          );
        }
        return response.json();
      }),
    ]);

    const countries = {
      countryInfo: countryInfoResponse,
      countryFlag: countryFlagResponse,
      countryPopulation: countryPopulationResponse,
    };

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

export { getAllCountries, getCountryById };
