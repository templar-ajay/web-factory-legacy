import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Bounded from "@/components/Bounded";

import { getFooter, getSettings } from "@/app/utils";

type FooterProps = {
  uid: string;
};

export default async function Footer({ uid }: FooterProps) {
  const settings = await getSettings();
  const footer = await getFooter(uid);

  const { logo, company_name, footer_text_color } = footer.data;
  // console.log("whatsapp icon link ", whatsapp_icon_link);

  const { secondary_color } = settings.data;
  return (
    <>
      <footer>
        <div className="w-full relative">
          <hr
            style={{
              border: "1px solid #3d2928",
              borderTop: "1px solid #9e8786",
              margin: "0px 24px",
            }}
          />
          <Bounded
            as="div"
            className="relative !py-8 sm:!py-8 md:!py-8 lg:!py-8 px-4 md:px-6"
          >
            <div
              className="flex justify-between"
              style={{ color: footer_text_color || secondary_color || "white" }}
            >
              <div>
                <PrismicNextImage className="max-h-[50px] " field={logo} />
              </div>
              <div className="text-lg my-auto">
                Copyright © {company_name} {new Date().getFullYear()}
              </div>
            </div>
          </Bounded>
        </div>
      </footer>
    </>
  );
}
