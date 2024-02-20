import type { Metadata, Viewport } from "next";
import StyledComponentsRegistry from "@/lib/registry";

import "./globals.css";
import clsx from "clsx";

import { Questrial, Roboto, Montserrat, Anton } from "next/font/google";

import { repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";

import { Providers } from "@/app/providers";
import { TrackingHeadScript } from "@phntms/next-gtm";
import { getSettings } from "@/app/utils";
import GlobalStyles from "@/components/GlobalStyles";

const body = Questrial({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-body",
});

const hero = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-anton",
});

const display = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
  variable: "--font-display",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-montserrat",
});

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings({ lang: "es-es" });

  console.log("settings", settings);

  const { meta_title, meta_description, og_image } = settings.data;

  return {
    title: meta_title || "Fallback Meta Title",
    description: meta_description || "Fallback description",
    openGraph: {
      images: [og_image?.url || "./fallback_image_path"],
    },
    robots: { index: true },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSettings({ lang: "es-es" });

  const {
    gtm_id: GTM_ID,
    bold_gradient_color_1,
    bold_gradient_color_2,
  } = settings.data;

  return (
    <html lang="en">
      <body
        className={clsx(
          body.variable,
          display.variable,
          montserrat.variable,
          hero.variable,
          "overflow-x-hidden selection:text-black selection:bg-white"
        )}
      >
        <GlobalStyles
          $strongGradientColor1={bold_gradient_color_1 || "#FF5733"}
          $strongGradientColor2={bold_gradient_color_2 || "#FFA500"}
        >
          <TrackingHeadScript id={GTM_ID || ""} isGTM={true} />
          <Providers>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </Providers>
          <PrismicPreview repositoryName={repositoryName} />
        </GlobalStyles>
      </body>
    </html>
  );
}
