import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { SVGProps } from "react";
import Image from "next/image";

export default function PageAbout() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-image bg-cover">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-50 px-3 py-1 text-sm dark:bg-gray-800">
                  Notre Mission
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Connecter les bailleurs et les clients pour des locations
                  <span className="text-primary"> immobilières </span>
                  réussies
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Notre plateforme a pour mission de faciliter la mise en
                  relation entre les bailleurs immobiliers et les clients à la
                  recherche d&apos;un logement. Nous croyons en une approche
                  transparente et personnalisée pour garantir des expériences de
                  location réussies.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Devenir bailleur
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Devenir client
                  </Link>
                </div>
              </div>
              <Image
                src="/assets/images/team.svg"
                width="550"
                height="310"
                alt="Image"
                className="mx-auto h-full aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-50 px-3 py-1 text-sm dark:bg-gray-800">
                  Notre équipe
                </div>

                <h2 className="text-3xl tracking-tighter sm:text-5xl">
                  Rencontrez{" "}
                  <span className="text-primary">l&apos;équipe </span> derrière
                  la plateforme
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Notre équipe d&apos;experts passionnés travaille chaque jour
                  pour vous offrir la meilleure expérience de location
                  immobilière.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-4">
                <Avatar className="w-20 h-20 border">
                  <img src="/placeholder.svg" alt="@username" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center">
                  <div className="text-lg font-semibold">John Doe</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Fondateur et PDG
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    John a plus de 15 ans d&apos;expérience dans
                    l&apos;industrie immobilière. Il est passionné par la
                    création de solutions innovantes pour faciliter la location.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <Avatar className="w-20 h-20 border">
                  <img src="/placeholder.svg" alt="@username" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center">
                  <div className="text-lg font-semibold">Sarah Miller</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Directrice des opérations
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Sarah a une expertise approfondie dans la gestion de
                    plateformes de location immobilière. Elle veille à
                    l&apos;efficacité de nos processus.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <Avatar className="w-20 h-20 border">
                  <img src="/placeholder.svg" alt="@username" />
                  <AvatarFallback>TL</AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center">
                  <div className="text-lg font-semibold">Thomas Lévesque</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Directeur technique
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Thomas est un expert en développement web qui veille à
                    l&apos;évolution constante de notre plateforme pour offrir
                    la meilleure expérience utilisateur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-image-b bg-center bg-cover">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-50 px-3 py-1 text-sm dark:bg-gray-800">
                  Pourquoi nous choisir ?
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Des avantages pour les bailleurs et les clients
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Notre plateforme offre de nombreux avantages aux bailleurs et
                  aux clients pour faciliter leurs démarches de location
                  immobilière.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <ThumbsUpIcon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">
                      Visibilité accrue pour les bailleurs
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Nos outils de marketing et de référencement permettent aux
                      bailleurs de toucher un large public de clients
                      potentiels.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <WalletIcon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">
                      Gestion simplifiée pour les bailleurs
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Notre plateforme offre des outils de gestion locative
                      intuitifs pour faciliter les démarches des bailleurs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <SearchIcon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">
                      Recherche simplifiée pour les clients
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Nos filtres de recherche avancés permettent aux clients de
                      trouver rapidement le logement qui leur convient.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ShieldCheckIcon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">
                      Sécurité et confiance pour tous
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Nous mettons tout en œuvre pour garantir des transactions
                      sécurisées et une expérience de location sereine.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Prêt à rejoindre notre communauté ?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Que vous soyez un bailleur ou un client, inscrivez-vous
                maintenant pour découvrir tous les avantages de notre
                plateforme.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-2 min-[400px]:flex-row">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Devenir bailleur
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Devenir client
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function MountainIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShieldCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ThumbsUpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}

function WalletIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}
