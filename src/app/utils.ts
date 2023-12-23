import { createClient } from "@/prismicio";

export const getSettings = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");
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
