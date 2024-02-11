import { createClient } from "@/prismicio";

export const getSettings = async ({ lang }: { lang: string }) => {
  const client = createClient();
  const settings = await client.getSingle("settings", { lang: lang });
  return settings;
};

export const getHeader = async (uid: string) => {
  const client = createClient();
  const header = await client.getByUID("header", uid);
  return header;
};

export const getFooter = async (uid: string) => {
  const client = createClient();
  const footer = await client.getByUID("footer", uid);
  return footer;
};

export const hexToRGB = (hex: string) => {
  let alpha = false,
    h = hex.slice(hex.startsWith("#") ? 1 : 0);
  //@ts-ignore
  if (h.length === 3) h = [...h].map((x) => x + x).join("");
  else if (h.length === 8) alpha = true;
  //@ts-ignore
  h = parseInt(h, 16);
  return (
    //@ts-ignore
    (h >>> (alpha ? 24 : 16)) +
    ", " +
    //@ts-ignore
    ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
    ", " +
    //@ts-ignore
    ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0))
  );
};
