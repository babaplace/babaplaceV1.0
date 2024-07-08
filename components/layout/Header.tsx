"use client";
import { useState } from "react";
import { Mail, Menu } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { SITECONFIG } from "@/src/config/siteConfig";
import { Button, buttonVariants } from "../ui/button";
import { navlinks } from "../../src/config/siteConfig";
import { cn } from "@/lib/utils";
import { Session } from "next-auth";
import ProfileAvatarHeader from "./ProfileAvatarHeader";
import SearchMobile from "../blocks/SearchMoble";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

type HeaderProps = {
  user?: Session | null;
};

export default function Header({ user }: HeaderProps) {
  const pathname = usePathname();

  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = Object.entries(navlinks).map(([key, value]) => ({
    ...value,
    id: key,
  }));

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-lg"
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">
          <Image
            src={SITECONFIG.logo}
            alt={SITECONFIG.seo.description ?? "logo de baba place"}
            width={100}
            height={50}
          />
        </div>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-gray-600 hover:text-primary transition duration-300",
                {
                  "text-primary": pathname === item.href,
                }
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          {user?.user ? <ProfileAvatarHeader userSession={user} /> : null}
          <div className="inline md:hidden">
            <Sheet open={mobileMenuOpen}>
              <SheetTrigger
                asChild
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(true);
                }}
              >
                <Menu />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    {user?.user ? (
                      <ProfileAvatarHeader userSession={user} />
                    ) : null}
                  </SheetTitle>
                  <SheetDescription>
                    <Image
                      src={SITECONFIG.logo}
                      alt={SITECONFIG.seo.description ?? "logo de baba place"}
                      width={100}
                      height={50}
                    />
                  </SheetDescription>
                </SheetHeader>

                <SheetFooter>
                  <SheetClose asChild>
                    <div className="grid gap-4 py-4">
                      {navItems.map((item) => (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            router.push(item.href);
                            setMobileMenuOpen(false);
                          }}
                          key={item.name}
                          className={cn(
                            "text-gray-600 hover:text-primary transition duration-300",
                            {
                              "text-primary": pathname === item.href,
                            }
                          )}
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
