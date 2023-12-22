import { createClient } from "@/prismicio";

const Iframe = async ({ iframe }: any) => {
  //   console.log("iframe_", iframe);
  const uid = iframe?.uid;
  if (uid) {
    const client = createClient();
    const iframe = await client.getByUID("iframe", uid);
    const { cta_iframe } = iframe.data;
    return (
      <>
        <div
          style={{ width: "100%", height: "100%" }}
          dangerouslySetInnerHTML={{
            __html: `
            ${cta_iframe}
            `,
          }}
        ></div>
      </>
    );
  } else return <></>;
};

export default Iframe;
