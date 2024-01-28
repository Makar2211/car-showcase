import Link from "next/link";
import Image from "next/image";
import { CustomButton } from "./CustomButton";

export const Navbar = () => {
  return (
    <header className="w-full fixed z-10 bg-black-100">
      <nav className="max-w-[1440] mx-auto px-16 flex justify-between items-center max-sm:px-4  py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contai"
          />
        </Link>

        <CustomButton
          title="Sing In"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};
