import { SITECONFIG, navlinks } from "@/src/config/siteConfig";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = () => {
  const navItems = Object.entries(navlinks).map(([key, value]) => ({
    ...value,
    id: key,
  }));
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">
              BabaPlace - appartement à louer
            </h3>
            <p>Votre partenaire immobilier de confiance au Maroc.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-red-400 transition duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contactez-nous</h3>
            <p>Email: babaplace@gmail.com</p>
            <p>Tél: +212 72 00 02 039</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Suivez-nous</h3>
            {/* Add social media icons here */}
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4 text-center text-sm">
        <p>&copy; 2024 BabaPlace. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
