import { SITECONFIG, navlinks } from "@/src/constants/siteConfig";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = () => {
  const navs = Object.entries(navlinks).map(([key, value]) => ({
    ...value,
    id: key,
  }));
  return (
    <footer className="bg-slate-600 text-white pt-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-2">{SITECONFIG.seo.name}</h3>
          <p>Votre partenaire immobilier de confiance au Maroc.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Liens Rapides</h3>
          <ul>
            {navs.map((nav) => (
              <li key={nav.id}>
                <Link href={nav.href} className="hover:text-primary">
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Contactez-nous</h3>
          <p>
            Email:{" "}
            <a href="mailto:babaplace9@gmail.com">babaplace9@gmail.com</a>
          </p>
          <p>
            Téléphone: <a href="tel:+212720802039">+212 72 08 02 039</a>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 py-2 sm:flex-row mt-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-slate-500">
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
