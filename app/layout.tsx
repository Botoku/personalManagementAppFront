import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "flatpickr/dist/themes/material_green.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ContentDisplayProvider } from "@/components/helpers/ContextProvider";
import Header from "@/components/sharedComponents/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Manager",
  description: "An app to get your affairs in order.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ContentDisplayProvider>
        <html lang="en">
          <body className={inter.className}>
            <Header /> {children}
          </body>
        </html>
      </ContentDisplayProvider>
    </ClerkProvider>
  );
}
