import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { client_tag } from "@/app/tag";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSettings } from "@/app/utils";

export default async function Page() {
  const client = createClient();

  const docs = await client
    .getByEveryTag([client_tag, "homepage"])
    .catch(() => notFound());
  const page = docs.results.find((x) => x.type == "page");
  // console.log("page", page);

  const settings = await getSettings();

  const { default_header, default_footer } = settings.data;
  //@ts-ignore
  const { header, footer } = page?.data;

  const headerUID =
    header?.uid ||
    default_header?.uid ||
    "default-header-not-found-in-settings";
  const footerUID =
    footer?.uid ||
    default_footer?.uid ||
    "default-footer-not-found-in-settings";

  return (
    <>
      <Header uid={headerUID} />
      {/*@ts-ignore*/}
      <SliceZone slices={page.data.slices} components={components} />
      <Footer uid={footerUID} />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const docs = await client
    .getByEveryTag([client_tag, "homepage"])
    .catch(() => notFound());
  const page = docs.results.find((x) => x.type == "page");

  return {
    //@ts-ignore
    title: page.data.meta_title,
    //@ts-ignore
    description: page.data.meta_description,
  };
}
