import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { ZodError, z } from "zod";
import bcrypt from "bcrypt";
import Google from "next-auth/providers/google";
import { prisma } from "./prisma";
import { loginScheme } from "@/app/auth/auth.sheme";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user;
        console.log(credentials);

        const credentialsParse = await loginScheme.parseAsync(credentials);
        user = await prisma.user.findUnique({
          where: { email: credentialsParse.email },
        });

        if (!user) {
          throw new Error("identifiants invalides !");
        }

        // logic to salt and hash password
        const pwHash = await bcrypt.compare(
          credentialsParse.password,
          user.password ?? ""
        );

        if (!pwHash) {
          throw new Error("identifiants invalides !");
        }
        console.log(user);

        return user;
      },
    }),
  ],
  callbacks: {
    session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, profile, account }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (user) {
        token.accessToken = account?.access_token;
        token.sub = user.id;
      }
      return token;
    },
  },

  session: {
    strategy: "jwt",
    maxAge: 2592000 * 12, // 12 months
  },

  debug: process.env.NODE_ENV === "development",
});
