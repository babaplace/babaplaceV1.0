import type { Metadata } from "next";
import { Inter, Sofia_Sans } from "next/font/google";
import "./globals.css";
import { SITECONFIG } from "@/src/config/siteConfig";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Providers } from "@/components/layout/Providers";
import { cn } from "@/lib/utils";
import { auth } from "@/lib/auth";
import Annonce from "@/components/layout/Annonce";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";

const font = Sofia_Sans({
  weight: "variable",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SITECONFIG.seo.name,

  description: SITECONFIG.seo.description,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userSession = await auth();
  return (
    <html lang="fr">
      <body className={cn(font.className, "min-h-screen bg-gray-100 relative")}>
        <Providers>
          <Analytics />
          <Toaster theme="dark" position="top-center" richColors={true} />
          {/* <Annonce /> */}
          <Header user={userSession} />
          <main className="mx-auto ">{children}</main>
          <Footer />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
