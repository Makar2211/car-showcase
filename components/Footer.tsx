import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-col  text-black-100 mt-5 border-t border-gray-100">
      <div className="flex flex-wrap justify-between gap-5  md:px-16 md:py-10 max-md:flex-col max-md:justify-center">
        <div className="flex flex-col justify-start  items-start gap-6 max-md:justify-center max-md:items-center">
          <Image
            src="/logo.svg"
            alt="footer logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700 max-md:text-center">
            CarHub 2023 <br /> All rights reserved &copy;{" "}
          </p>
        </div>

        <div className="footer__links max-md: flex justify-center items-center">
          {footerLinks.map((link) => (
            <div
              key={link.title}
              className="footer__link max-md: flex justify-center items-center"
            >
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 boreder-gray-100 border-t sm:px-16 px-6 py-10 max-sm:flex-col">
        <div>@2023 CarHub. All Rights Reserved</div>
        <div>
          <Link href="/" className="text-gray-400 mr-6 max-sm:mt-5">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-400">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};
