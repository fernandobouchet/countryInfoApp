import { getCountryById } from "@/lib/actions/getCountryById";
import Image from "next/image";

interface Props {
  searchParams: {
    code: string;
    name: string;
  };
}

export default async function CountryPage({ searchParams }: Props) {
  const { code, name } = await searchParams;
  const country = await getCountryById(code, name);

  return (
    <section>
      <div>
        <h2 className="text-2xl">{name}</h2>
      </div>
      <div className="py-8">
        <div className="relative w-40 h-32">
          <Image
            src={country.countryFlag.data.flag}
            alt={`${name} flag.`}
            fill
            priority
          />
        </div>
      </div>
    </section>
  );
}
