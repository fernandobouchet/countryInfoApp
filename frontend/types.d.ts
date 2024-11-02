type country = {
  countryCode: string;
  name: string;
};

type borders = {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: null;
};

type countryFullInfo = {
  countryInfo: {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: [borders];
  };
  countryFlag: {
    error: boolean;
    msg: string;
    data: {
      name: string;
      flag: string;
      iso2: string;
      iso3: string;
    };
  };
  countryPopulation: {
    error: boolean;
    msg: string;
    data: {
      country: string;
      code: string;
      iso3: string;
      populationCounts: [Array];
    };
  };
};

export type { country, countryFullInfo };
