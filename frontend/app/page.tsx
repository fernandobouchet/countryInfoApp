import CountryCard from "@/components/countryCard";
import { getAllCountries } from "@/lib/actions/getAllCountries";
import { country } from "@/types";

export default async function Home() {
  const countries: country[] = await getAllCountries();

  return (
    <>
      <div className="py-8 text-center">
        <h1 className="text-3xl lg:text-5xl py-4 font-semibold">
          Country Info App
        </h1>
        <p>Select any of the countries below to see his flag, population.</p>
      </div>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {countries.map((country) => (
          <CountryCard key={country.countryCode} country={country} />
        ))}
      </section>
    </>
  );
}
