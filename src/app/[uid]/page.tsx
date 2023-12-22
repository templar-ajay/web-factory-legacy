import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSettings } from "@/app/utils";
import { client_tag } from "@/app/tag";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());

  // if the page is not of current client
  if (!page?.tags.includes(client_tag)) {
    notFound();
  }
  const settings = await getSettings();

  const { default_header, default_footer } = settings.data;
  //@ts-ignore
  const { header, footer } = page?.data;

  const headerUID =
    //@ts-ignore
    header?.uid ||
    default_header?.uid ||
    "default-header-not-found-in-settings";
  const footerUID =
    //@ts-ignore
    footer?.uid ||
    default_footer?.uid ||
    "default-footer-not-found-in-settings";

  return (
    <>
      <Header uid={headerUID} />
      <SliceZone slices={page.data.slices} components={components} />
      <Footer uid={footerUID} />
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
    .getByUID("page", params.uid)
    .catch(() => notFound());

  // if the page is not of current client
  if (!page?.tags.includes(client_tag)) {
    notFound();
  }

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
