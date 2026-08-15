import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";

import { QueryProvider } from "../../providers";
import "@/styles/globals.css";

import { cn } from "@/libs/utils";
import { montserrat } from "@/libs/fonts";
import { baseMetadata } from "@/libs/metadata";

export const metadata: Metadata = baseMetadata;

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({
  children,
  params,
}: Readonly<RootLayoutProps>) {
  const { locale } = await params;

  return (
    <html lang={locale} className={cn("font-sans", montserrat.variable)}>
      <body>
        <NextIntlClientProvider>
          <QueryProvider>{children}</QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
