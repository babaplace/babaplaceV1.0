"use client";
import { useState } from "react";
import { Dialog, DialogPanel, Popover, PopoverGroup } from "@headlessui/react";
import Link from "next/link";
import { Mail, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { SITECONFIG } from "@/src/constants/siteConfig";
import { Button, buttonVariants } from "../ui/button";
import { navlinks } from "../../src/constants/siteConfig";
import { cn } from "@/lib/utils";
import { Session } from "next-auth";
import ProfileAvatarHeader from "./ProfileAvatarHeader";
import SearchMobile from "../blocks/SearchMoble";

type HeaderProps = {
  user?: Session | null;
};

export default function Header({ user }: HeaderProps) {
  const pathname = usePathname();

  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navs = Object.entries(navlinks).map(([key, value]) => ({
    ...value,
    id: key,
  }));

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-screen-2xl items-center justify-between p-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Babaplace logo</span>
            <Image
              width={100}
              height={50}
              className="h-10 w-auto"
              src={SITECONFIG.logo}
              alt={SITECONFIG.seo.name}
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {navs.map((nav) => (
            <Link
              key={nav.id}
              href={nav.href}
              className={cn(
                "text-xl hover:text-primary font-semibold leading-6 text-gray-900 ",
                { "text-primary": nav.href === pathname }
              )}
            >
              {nav.name}
            </Link>
          ))}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {user?.user ? (
            <ProfileAvatarHeader userSession={user} />
          ) : (
            <Link
              href="/auth/login"
              className={cn(buttonVariants({}), "text-white px-8")}
            >
              Se connecter <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed top-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                width={100}
                height={50}
                className="h-10 w-auto"
                src={SITECONFIG.logo}
                alt={SITECONFIG.seo.name}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="flex flex-col gap-4 mt-2 justify-start">
                {navs.map((nav) => (
                  <Button
                    key={nav.id}
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(nav.href);
                      setMobileMenuOpen(false);
                    }}
                    className={cn(
                      "bg-white text-black hover:text-white text-start flex justify-start",
                      { "bg-primary text-white": pathname === nav.href }
                    )}
                  >
                    {nav.name}
                  </Button>
                ))}
              </div>
              <div className="py-6">
                {user?.user ? (
                  <ProfileAvatarHeader userSession={user} />
                ) : (
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/auth/login");
                      setMobileMenuOpen(false);
                    }}
                    className="w-full  text-start flex justify-start"
                  >
                    Se connecter
                  </Button>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
