import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSettings } from "@/app/utils";
import Morphing from "@/components/Morphing_2/Morphing";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("page", params.uid, { lang: "es-es" })
    .catch((err) => {
      console.log("err", err);
      notFound();
    });

  const settings = await getSettings({ lang: "es-es" });

  const { default_header, default_footer } = settings.data;
  const { header, footer, background_noise, morphing_effect } = page?.data;
  const { lang, alternate_languages } = page;

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
      <div className="relative overflow-hidden">
        <div
          className="absolute w-full h-full -z-50"
          style={{
            color: page.data.page_default_text_color || "",
            background: page.data.background_color || "",
          }}
        />
        {morphing_effect && (
          <Morphing
            /* dissolveColor={page.data.background_color || "#000000"} */
            className="-z-40 absolute h-full w-full"
          ></Morphing>
        )}

        {background_noise && (
          <div
            className="absolute h-full w-full -z-30"
            style={{
              background: "url(/Noise&Texture.webp)",
            }}
          />
        )}

        <Header uid={headerUID} lang={lang} />
        <SliceZone
          slices={page.data.slices}
          components={components}
          context={{
            page_default_text_color: page.data.page_default_text_color,
            lang: lang,
            alternate_languages: alternate_languages,
          }}
        />
        <Footer
          uid={footerUID}
          lang={lang}
          alternate_languages={alternate_languages}
        />
      </div>
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("page", params.uid, { lang: "es-es" })
    .catch(() => notFound());

  const { meta_title, meta_description, meta_image } = page.data;

  return {
    title: meta_title,
    description: meta_description,
    openGraph: {
      images: [meta_image?.url || "./fallback_image_path"],
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("page");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
