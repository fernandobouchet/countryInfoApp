import CountryPopulationChart from "@/components/countryPopulationChart";
import { Button } from "@/components/ui/button";
import { getCountryById } from "@/lib/actions/getCountryById";
import { countryFullInfo } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  searchParams: Promise<{
    code: string;
    name: string;
  }>;
}

export default async function CountryPage({ searchParams }: Props) {
  const { code, name } = await searchParams;
  const country: countryFullInfo = await getCountryById(code, name);

  return (
    <section className="mt-5 lg:mt-10 flex flex-col lg:flex-row justify-center lg:justify-around gap-4 lg:gap-0">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h2 className="text-2xl font-medium">{name}</h2>
          <p className="text-secondary-foreground">
            Official name: {country.countryInfo.officialName}
          </p>
          <p className="text-secondary-foreground">
            Region: {country.countryInfo.region}
          </p>
        </div>
        <div className="py-8 mx-auto">
          <div className="relative w-80 h-auto">
            <Image
              src={country.countryFlag.data.flag}
              alt={`${name} flag.`}
              width={800}
              height={500}
              priority
            />
          </div>
        </div>
        <div>
          <h3>Borders countries:</h3>
          {country.countryInfo.borders.map((country) => (
            <Link
              key={country.countryCode}
              href={{
                pathname: `/country/${country.countryCode}`,
                query: { code: country.countryCode, name: country.commonName },
              }}
            >
              <Button variant={"link"}>{country.commonName}</Button>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full max-w-xl">
        <div>
          <h3>Population</h3>
          <p className="text-secondary-foreground">
            Population over the years.
          </p>
        </div>
        <CountryPopulationChart
          populationCounts={country.countryPopulation.data.populationCounts}
        />
      </div>
    </section>
  );
}
