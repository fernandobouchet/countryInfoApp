import Link from "next/link";
import { Button } from "./ui/button";

export default function Nav() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Country Info App
        </Link>
        <nav>
          <ul className="flex">
            <li>
              <Button variant="ghost" asChild>
                <Link href="/">Home</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
