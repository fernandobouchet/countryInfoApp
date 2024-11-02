import { Button } from "@/components/ui/button";
import { getCountryById } from "@/lib/actions/getCountryById";
import { countryFullInfo } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  searchParams: {
    code: string;
    name: string;
  };
}

export default async function CountryPage({ searchParams }: Props) {
  const { code, name } = await searchParams;
  const country: countryFullInfo = await getCountryById(code, name);

  return (
    <section className="mt-5 lg:mt-10">
      <div>
        <h2 className="text-2xl font-medium">{name}</h2>
      </div>
      <div className="py-8">
        <div className="relative w-48 h-auto">
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
        <h3>Borders:</h3>
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
    </section>
  );
}
