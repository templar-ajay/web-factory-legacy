import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { components } from "..";
import Image from "next/image";

type componentsType = ({}: any) => JSXMapSerializer;

const getComponents: componentsType = ({
  h2_color = "inherit",
  paragraph_color = "inherit",
  strong_color = "inherit",
}: any) => {
  return {
    heading2: ({ children }: any) => {
      return (
        <Heading
          as="h2"
          size="lg"
          className="font-bold tracking-tight leading-4 text-6xl mobile:text-7xl sm:text-7xl md:text-8xl 2xl:text-6xl text-center mb-4"
          color={h2_color}
        >
          {children}
        </Heading>
      );
    },
    paragraph: ({ children }: any) => (
      <Paragraph
        className="text-center text-lg md:text-xl text-black-500 mt-8 mb-10"
        color={paragraph_color}
      >
        {children}
      </Paragraph>
    ),
    strong: ({ children }: any) => (
      <strong style={{ color: strong_color }}>{children}</strong>
    ),
  };
};

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({
  slice,
  //@ts-ignore
  context: { page_default_text_color },
}: CallToActionProps): JSX.Element => {
  const {
    text_color,
    call_text_color,
    action_text_color,
    action_button_background,
    bold_call_text_color,
  } = slice.primary;
  const components = getComponents({
    h2_color: call_text_color || page_default_text_color,
    strong_color: bold_call_text_color,
    paragraph_color: text_color || page_default_text_color,
  });
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.call} components={components} />
      <div className="arrow-box">
        <PrismicNextLink
          style={{
            backgroundColor: action_button_background || "#dac682",
            color: action_text_color || "#000000",
          }}
          className="block max-w-md mx-auto text-2xl mobile:text-3xl leading-relaxed  py-4 mobile:py-7 px-8 mobile:px-14 mt-14 mb-10 font-light rounded-xl arrow-button"
          field={slice.primary.action_button_link}
        >
          <div className="flex justify-evenly mobile:justify-between items-center">
            <div className="block">{slice.primary.action_button_text}</div>
            <div className="max-w-[18vw] mobile:max-w-[130px]">
              <Image
                className="block arrow-icon"
                src="longArrow.svg"
                width="130"
                height="20"
                alt="long arrow"
              />
            </div>
          </div>
        </PrismicNextLink>
      </div>

      <div className="email mx-auto text-center text-xl ">
        <PrismicNextLink
          style={{ color: page_default_text_color }}
          className="py-5"
          field={slice.primary.link_to_email}
        >
          <PrismicNextImage
            className="inline-block mr-3"
            field={slice.primary.email_icon}
          />
          {slice.primary.email}
        </PrismicNextLink>
      </div>
    </Bounded>
  );
};

export default CallToAction;
