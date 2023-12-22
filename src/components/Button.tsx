import CTA from "@/components/CTA";
import Iframe from "@/components/Iframe";
import clsx from "clsx";
import { PrismicNextLink } from "@prismicio/next";
import { getSettings } from "@/app/utils";

type getButtonStylesProps = {
  variant: string;
  cta_text_color?: string;
  cta_background_color?: string;
};

function getButtonStyles({
  variant = "Filled",
  cta_text_color,
  cta_background_color,
}: getButtonStylesProps) {
  if (variant == "Filled") {
    return {
      color: cta_text_color || "rgb(250,255,255)",
      backgroundColor: cta_background_color || "rgb(234,179,8)",
    };
  } else {
    return {
      color: cta_text_color || "#000",
      backgroundColor: "transparent",
      border: "4px solid",
      borderRadius: "10px",
      borderColor: cta_background_color || "#000",
    };
  }
}

type ButtonProps = {
  cta_style?: string;

  cta_link: any;
  iframe: any;
  className?: any;
  children: any;
};

export default async function Button({
  cta_style,
  cta_link,
  iframe,
  className,
  children,
}: ButtonProps) {
  const settings = await getSettings();
  const {
    cta_background_color,
    cta_text_color,
    default_iframe,
    default_cta_style,
  } = settings.data;

  const _variant =
    cta_style == "Default" || cta_style == undefined
      ? default_cta_style
      : cta_style;

  const theButtonStyles = getButtonStyles({
    variant: _variant,
    ...{ cta_background_color, cta_text_color },
  });

  return (
    <div className="relative flex justify-center">
      {iframe?.id ? (
        <CTA
          iframe={<Iframe iframe={iframe || default_iframe}></Iframe>}
          className={className}
          style={theButtonStyles}
        >
          {children}
        </CTA>
      ) : (
        <PrismicNextLink
          className={clsx(
            "flex justify-center w-fit transition-colors duration-200 ease-in-out py-4 md:py-6 px-8 md:px-12 font-display font-semibold text-lg md:text-2xl text-center tracking-wide text-white bg-yellow-400 hover:bg-yellow-500",
            className
          )}
          style={theButtonStyles}
          field={cta_link}
        >
          {children}
        </PrismicNextLink>
      )}
    </div>
  );
}
