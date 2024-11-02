import { country } from "@/types";
import { Button } from "./ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";

interface Props {
  country: country;
}

export default function CountryCard({ country }: Props) {
  return (
    <Card className="flex flex-col items-center">
      <CardHeader>
        <CardTitle className="text-center">{country.name}</CardTitle>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Link
          href={{
            pathname: `/country/${country.countryCode}`,
            query: { code: country.countryCode, name: country.name },
          }}
        >
          <Button>More info</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
