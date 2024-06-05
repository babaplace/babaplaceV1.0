import { SITECONFIG } from "@/src/constants/siteConfig";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="mt-auto bg-gray-100">
      <div className="max-w-5xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-center ">
          <Image
            width={100}
            height={50}
            className="h-10 w-auto"
            src={SITECONFIG.logo}
            alt={SITECONFIG.seo.name}
          />
        </div>

        <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-500">
          Découvrez votre nouveau chez-vous : confort, communauté et économies
          pour une expérience étudiante inoubliable.
        </p>

        <ul className="flex flex-wrap justify-center gap-6 mt-10 md:gap-8 lg:gap-12">
          <li className="flex items-center justify-center gap-2 text-gray-700 transition hover:text-gray-700/75">
            <Phone className="text-green-500" absoluteStrokeWidth />
            <div className="flex flex-col">
              <a href="tel:+212720802039">+212 72 08 02 039</a>
            </div>
          </li>
          <li className="flex items-center justify-center gap-2 text-primary transition hover:text-primary">
            <Mail className="text-red-500" absoluteStrokeWidth />

            <div className="flex flex-col text-black">
              <a href="mailto:babaplace9@gmail.com">babaplace9@gmail.com</a>
              <a href="mailto:babaplace@proton.me">babaplace@proton.me</a>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          &copy; 2024 Babaplace Inc. Tous droits réservés.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/politiques/usages"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Conditions d&apos;utilisation
          </Link>
          <Link
            href="/politiques/confidentialities"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Confidentialité
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
