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

  const navItems = Object.entries(navlinks).map(([key, value]) => ({
    ...value,
    id: key,
  }));

  return (
    <header className="fixed w-full bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-sm z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-red-600">BABA PLACE</div>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-gray-600 hover:text-red-600 transition duration-300",
                {
                  "text-red-600": pathname === item.href,
                }
              )}
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
  );
}
