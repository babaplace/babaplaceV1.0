"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { auth } from "@/lib/auth";
import { LogOut } from "lucide-react";
import { Session } from "next-auth";
import { cn } from "@/lib/utils";
import LogoutButton from "@/app/auth/LogoutButton";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type Props = {
  userSession: Session;
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const ProfileAvatarHeader = ({ userSession, setMobileMenuOpen }: Props) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu open={open}>
      <DropdownMenuTrigger
        onClick={() => {
          setOpen(true);
        }}
        asChild
      >
        <Avatar className={cn("cursor-pointer border-dashed ")}>
          <AvatarImage src={userSession.user.image!} alt="image de profile" />
          <AvatarFallback>
            {userSession.user.name?.charAt(0).toString().toLocaleUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button
            variant={"outline"}
            className="border-none"
            onClick={(e) => {
              e.preventDefault();
              router.push("/profile");
              setOpen(false);
              setMobileMenuOpen(false);
            }}
          >
            Profile
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>Parametres</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileAvatarHeader;
