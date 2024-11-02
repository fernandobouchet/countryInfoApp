import CountryCard from "@/components/countryCard";
import { getAllCountries } from "@/lib/actions/getAllCountries";
import { country } from "@/types";

export default async function Home() {
  const countries: country[] = await getAllCountries();

  return (
    <>
      <div>
        <h1>Country Info App</h1>
      </div>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {countries.map((country) => (
          <CountryCard key={country.countryCode} country={country} />
        ))}
      </section>
    </>
  );
}
