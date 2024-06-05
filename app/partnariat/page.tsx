import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { SVGProps } from "react";
import DotPattern from "@/components/ui/Dotpattern";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

export default function PagePartners() {
  return (
    <div className="w-full">
      <section className="bg-gray-50 dark:bg-gray-800 py-12 md:py-24 lg:py-32 relative">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)] absolute left-0"
          )}
        />
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Rejoignez notre écosystème de partenaires
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Notre plateforme de location immobilière vous offre de
                  nombreuses opportunités de partenariat pour développer votre
                  activité et atteindre de nouveaux clients.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <p className="text-gray-500 dark:text-gray-400">
                    Référencement prioritaire de vos biens
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <p className="text-gray-500 dark:text-gray-400">
                    Campagnes de co-marketing ciblées
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <p className="text-gray-500 dark:text-gray-400">
                    Accès à nos services partagés (gestion, assurance, etc.)
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#guide"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  En savoir plus
                </Link>
              </div>
            </div>

            <div className="mx-auto max-w-xl z-10 min-w-full rounded-xl bg-white p-6 shadow-xl md:p-8 lg:p-10">
              <form className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nom
                  </label>
                  <div className="mt-1">
                    <Input
                      id="name"
                      type="text"
                      placeholder="Entrez votre nom"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <Input
                      id="email"
                      type="email"
                      placeholder="Entrez votre email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Entrez votre message"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Devenez partenaire
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-image-b bg-cover bg-center relative">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Témoignages de nos partenaires
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Découvrez ce que nos partenaires pensent de notre plateforme et de
              leur collaboration avec nous.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Julien Dupont</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Agence Immobilière XYZ
                  </p>
                </div>
              </div>
              <Separator className="my-4" />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                La plateforme nous a permis d&apos;augmenter notre visibilité et
                de générer de nouveaux leads. Le service client est
                exceptionnel.
              </p>
            </Card>
            <Card className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Sophie Martin</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Gestionnaire de Propriétés ABC
                  </p>
                </div>
              </div>
              <Separator className="my-4" />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Grâce à la plateforme, nous avons pu simplifier la gestion de
                nos biens locatifs et offrir un meilleur service à nos clients.
              </p>
            </Card>
            <Card className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>LB</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Léa Bouvier</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Fournisseur de Services Immobiliers
                  </p>
                </div>
              </div>
              <Separator className="my-4" />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Nous avons été impressionnés par la qualité des services
                proposés et la facilité d&apos;intégration avec notre activité.
              </p>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Devenez partenaire de notre plateforme
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Rejoignez notre écosystème de partenaires et bénéficiez de
                  nombreux avantages pour développer votre activité.
                </p>
              </div>
              <form className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Entrez votre email"
                  className="max-w-lg flex-1"
                />
                <Button type="submit">Nous contacter</Button>
              </form>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Partenariat"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-image-a bg-cover"
        id="guide"
      >
        <div className="w-full max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-3 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Guide de notre programme de partenariat
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Découvrez les étapes pour devenir partenaire et les avantages de
                notre programme.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gray-900 dark:bg-gray-50 text-white dark:text-gray-900 rounded-full w-10 h-10 flex items-center justify-center">
                    <UserIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-medium">Inscription</h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Remplissez le formulaire d&apos;inscription en ligne pour
                  commencer votre partenariat avec nous. Vous devrez fournir des
                  informations sur votre entreprise et vos activités.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gray-900 dark:bg-gray-50 text-white dark:text-gray-900 rounded-full w-10 h-10 flex items-center justify-center">
                    <CheckIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-medium">Validation</h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Notre équipe examinera votre demande et vous contactera pour
                  discuter des prochaines étapes. Nous vérifierons que votre
                  entreprise correspond à nos critères de partenariat.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gray-900 dark:bg-gray-50 text-white dark:text-gray-900 rounded-full w-10 h-10 flex items-center justify-center">
                    <SettingsIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-medium">Intégration</h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Une fois votre partenariat approuvé, nous vous guiderons dans
                  l&apos;intégration de votre entreprise sur notre plateforme.
                  Vous aurez accès à nos outils, formations et ressources pour
                  vous aider à tirer le meilleur parti de notre collaboration.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gray-900 dark:bg-gray-50 text-white dark:text-gray-900 rounded-full w-10 h-10 flex items-center justify-center">
                    <HandHelpingIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-medium">Suivi et support</h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Nous resterons à vos côtés pour vous accompagner dans le
                  développement de votre activité. Notre équipe dédiée sera
                  disponible pour répondre à vos questions et vous aider à tirer
                  le meilleur parti de notre partenariat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              FAQ sur notre programme de partenariat
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Trouvez les réponses à vos questions les plus fréquentes sur notre
              programme de partenariat.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full max-w-3xl">
            <AccordionItem value="faq-1">
              <AccordionTrigger className="text-base font-medium">
                Quels sont les avantages de devenir partenaire ?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  En devenant partenaire, vous bénéficiez d&apos;un
                  référencement prioritaire de vos biens, de campagnes de
                  co-marketing ciblées et d&apos;un accès à nos services
                  partagés (gestion, assurance, etc.). Cela vous permet
                  d&apos;augmenter votre visibilité, de générer de nouveaux
                  leads et d&apos;offrir un meilleur service à vos clients.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2">
              <AccordionTrigger className="text-base font-medium">
                Quels sont les critères pour devenir partenaire ?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Nous recherchons des entreprises immobilières, des
                  gestionnaires de propriétés et des fournisseurs de services
                  ayant une expertise et une expérience reconnues dans leur
                  domaine. Votre entreprise doit également correspondre à nos
                  valeurs et à notre vision
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}

function CheckIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function HandHelpingIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
      <path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
      <path d="m2 13 6 6" />
    </svg>
  );
}

function SettingsIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UserIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
