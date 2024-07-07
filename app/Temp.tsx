"use client";

// pages/index.tsx
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
} from "react-icons/fa";

interface NavItem {
  name: string;
  href: string;
}

interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
}

const navItems: NavItem[] = [
  { name: "Accueil", href: "/" },
  { name: "Découvrir", href: "/discover" },
  { name: "Mettre en location", href: "#" },
  { name: "Travailler avec nous", href: "#" },
  { name: "A propos", href: "#" },
];

const properties: Property[] = [
  {
    id: 1,
    title: "Kanitra rue hollanda 244, Fes",
    description: "Un espace accueillant avec vue panoramique",
    price: 1200,
    image: "/apartment1.jpg",
    bedrooms: 2,
    bathrooms: 1,
    area: 75,
  },
  {
    id: 2,
    title: "Appartement moderne, Casablanca",
    description: "Lumineux et récemment rénové",
    price: 1500,
    image: "/apartment2.jpg",
    bedrooms: 3,
    bathrooms: 2,
    area: 90,
  },
  // Add more properties here
];

const Home: React.FC = () => {
  const [searchType, setSearchType] = useState<"location" | "achat">(
    "location"
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>BabaPlace - Location Immobilière</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed w-full bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-sm z-50">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-red-600">BABA PLACE</div>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-red-600 transition duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden md:inline text-gray-600">
              +212 72 00 02 039
            </span>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </nav>
      </header>

      <main>
        <section
          className="relative h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-center text-white z-10 px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Trouvez Votre Chez-Vous Idéal
            </h1>
            <p className="text-xl mb-8">
              Explorez une large gamme de propriétés avec BabaPlace
            </p>
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
              <div className="flex justify-center mb-4">
                <button
                  className={`px-4 py-2 rounded-l-full ${
                    searchType === "location"
                      ? "bg-red-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setSearchType("location")}
                >
                  Location
                </button>
                <button
                  className={`px-4 py-2 rounded-r-full ${
                    searchType === "achat"
                      ? "bg-red-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setSearchType("achat")}
                >
                  Achat
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    className="w-full pl-10 pr-4 py-2 rounded-md border focus:ring-2 focus:ring-red-600 text-gray-700"
                    placeholder="Ville ou quartier"
                  />
                </div>
                <div className="relative">
                  <FaRegCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    className="w-full pl-10 pr-4 py-2 rounded-md border focus:ring-2 focus:ring-red-600 text-gray-700"
                    placeholder="Date"
                    type="date"
                  />
                </div>
                <div className="relative">
                  <FaBed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select className="w-full pl-10 pr-4 py-2 rounded-md border focus:ring-2 focus:ring-red-600 text-gray-700 appearance-none">
                    <option>Chambres</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3+</option>
                  </select>
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 flex items-center justify-center">
                  <FaSearch className="mr-2" />
                  Rechercher
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">Nouveaux Appartements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <motion.div
                key={property.id}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={property.image}
                    alt={property.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-4">{property.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-red-600">
                      {property.price} DH/mois
                    </span>
                    <div className="flex space-x-2 text-gray-500">
                      <span>
                        <FaBed className="inline mr-1" /> {property.bedrooms}
                      </span>
                      <span>
                        <FaBath className="inline mr-1" /> {property.bathrooms}
                      </span>
                      <span>
                        <FaRulerCombined className="inline mr-1" />{" "}
                        {property.area}m²
                      </span>
                    </div>
                  </div>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                    Voir plus
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
              Voir plus d'appartements
            </button>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Pourquoi Choisir BabaPlace ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-red-600 text-4xl mb-4">
                  <FaSearch />
                </div>
                <h3 className="text-xl font-bold mb-2">Recherche Facile</h3>
                <p className="text-gray-600">
                  Trouvez rapidement le logement qui vous convient grâce à notre
                  moteur de recherche avancé.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-red-600 text-4xl mb-4">
                  <FaMapMarkerAlt />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Localisations Idéales
                </h3>
                <p className="text-gray-600">
                  Découvrez des propriétés dans les meilleurs quartiers et
                  emplacements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-red-600 text-4xl mb-4">
                  <FaRegCalendarAlt />
                </div>
                <h3 className="text-xl font-bold mb-2">Réservation Simple</h3>
                <p className="text-gray-600">
                  Réservez votre visite ou votre location en quelques clics
                  seulement.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Témoignages Clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add testimonial cards here */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">
                "J'ai trouvé l'appartement de mes rêves grâce à BabaPlace. Le
                processus était simple et rapide !"
              </p>
              <p className="font-bold">- Sarah L.</p>
            </div>
            {/* Add more testimonials */}
          </div>
        </section>
      </main>

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
    </div>
  );
};

export default Home;
