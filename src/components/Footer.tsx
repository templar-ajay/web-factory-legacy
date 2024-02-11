import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Bounded from "@/components/Bounded";

import { getFooter, getSettings } from "@/app/utils";
import LanguageSwitcher from "./clientComponents/LanguageSwitcher";
import { getCountries } from "@/clientUtils";

type FooterProps = {
  uid: string;
  lang: string;
  alternate_languages: any;
};

export default async function Footer({
  uid,
  lang,
  alternate_languages,
}: FooterProps) {
  const settings = await getSettings({ lang: lang });
  const footer = await getFooter(uid);

  const { logo, company_name, footer_text_color } = footer.data;
  // console.log("whatsapp icon link ", whatsapp_icon_link);

  const { secondary_color } = settings.data;
  return (
    <>
      <footer>
        <div className="w-full relative">
          <div className="w-full flex justify-end px-4 md:px-6">
            <LanguageSwitcher
              placeholder={
                lang == "en-us" ? "Cambiar idioma" : "Change Language"
              }
              preSelected={lang == "en-us" ? "US" : "ES"}
              countries={getCountries(lang, alternate_languages?.[0]?.lang)}
              alternate_uid={alternate_languages?.[0]?.uid}
            />
          </div>
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
              className="flex justify-between flex-col mobile:flex-row items-center gap-y-5"
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
