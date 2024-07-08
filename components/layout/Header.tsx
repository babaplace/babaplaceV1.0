"use client";
import { useState } from "react";
import { LogIn, Mail, Menu } from "lucide-react";
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
        <Link href={"/"} className="text-2xl font-bold text-primary">
          <Image
            src={SITECONFIG.logo}
            alt={SITECONFIG.seo.description ?? "logo de baba place"}
            width={100}
            height={50}
          />
        </Link>
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
          {user?.user ? (
            <ProfileAvatarHeader userSession={user} />
          ) : (
            <Link
              href={"/auth/login"}
              className={cn(
                buttonVariants({ size: "sm" }),
                "flex justify-center gap-2 text-xs"
              )}
            >
              <span className="hidden md:inline"> Se connecter</span>{" "}
              <LogIn size={15} />
            </Link>
          )}
          <div className="inline md:hidden">
            <Sheet defaultOpen={mobileMenuOpen}>
              <SheetTrigger asChild>
                <Menu />
              </SheetTrigger>
              <SheetContent className=" justify-start items-start">
                <SheetHeader>
                  <SheetTitle>
                    {user?.user ? (
                      <ProfileAvatarHeader userSession={user} />
                    ) : (
                      <Link
                        href={"/auth/login"}
                        className={cn(
                          buttonVariants({ size: "sm" }),
                          "gap-2 text-xs"
                        )}
                      >
                        <span className="hidden md:inline"> Se connecter</span>{" "}
                        <LogIn size={15} />
                      </Link>
                    )}
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
                <SheetFooter></SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
