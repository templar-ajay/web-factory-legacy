import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSettings } from "@/app/utils";

export default async function Page() {
  const client = createClient();

  const homepage = await client.getByUID("page", "homepage");

  const settings = await getSettings();

  const { default_header, default_footer } = settings.data;
  const { header, footer, background_noise } = homepage?.data;

  const headerUID =
    //@ts-ignore
    header?.uid ||
    //@ts-ignore
    default_header?.uid ||
    "default-header-not-found-in-settings";
  const footerUID =
    //@ts-ignore
    footer?.uid ||
    //@ts-ignore
    default_footer?.uid ||
    "default-footer-not-found-in-settings";

  return (
    <>
      <div
        style={{
          color: homepage.data.text_color || "",
          background: homepage.data.background_color || "",
        }}
      >
        <div
          style={{
            background: homepage.data.background_noise
              ? "url(/Noise&Texture.webp)"
              : "",
            zIndex: 1,
          }}
        >
          <Header uid={headerUID} />
          <SliceZone slices={homepage.data.slices} components={components} />
          <Footer uid={footerUID} />
        </div>
      </div>
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const page = await client
    .getByUID("page", "homepage")
    .catch(() => notFound());

  return {
    //@ts-ignore
    title: page.data.meta_title,
    //@ts-ignore
    description: page.data.meta_description,
  };
}
