import Container from "@/components/ui/container";
import Image from "next/image";
import logo from "@/public/Logo.svg";
import { Navbar } from "@/muck/data";
import Link from "next/link";
import Lang from "./lang";
export default function Header() {
  return (
    <>
      <header className="w-full fixed  bg-white py-4  z-40">
        <Container className="flex items-center justify-between">
          <Link href={"/"} className="flex items-center">
            <Image alt="img" height={64} width={97} src={logo} />
            <h3 className=" text-sm font-medium leading-5 text-left w-full max-w-[237px]">
              Министерство юстиции Республики Узбекистан
            </h3>
          </Link>

          <div className="flex items-center gap-[24px]">
            {Navbar.map((e) => (
              <Link
                className="font-inter text-sm font-normal leading-6 text-left hover:text-[#13399A]"
                key={e?.id}
                href={e?.label}
              >
                {e?.label}
              </Link>
            ))}
          </div>

         <Lang/>
        </Container>
      </header>
    </>
  );
}
