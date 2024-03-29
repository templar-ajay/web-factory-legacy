import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { Reveal } from "@/components/Reveal";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import clsx from "clsx";

type componentsType = ({}: any) => JSXMapSerializer;

const getComponents: componentsType = ({
  text_color = "inherit",
  paragraph_color = "inherit",
  strong_color = "inherit",
  content_alignment,
}: any) => {
  return {
    heading2: ({ children }: any) => {
      return (
        <Heading
          as="h2"
          size="lg"
          className="font-normal font-hero tracking-tight !leading-snug text-2xl mobile:text-3xl md:text-5xl 2xl:text-6xl text-center mb-4"
          color={text_color}
        >
          {children}
        </Heading>
      );
    },
    heading1: ({ children }: any) => {
      return (
        <Heading
          as="h1"
          size="xxs"
          className="!font-light tracking-widest font-display text-center mb-5"
          color={text_color}
        >
          {children}
        </Heading>
      );
    },
    heading3: ({ children }: any) => {
      return (
        <Heading
          as="h3"
          size="sm"
          className="font-body text-center mb-4"
          color={text_color}
        >
          {children}
        </Heading>
      );
    },
    paragraph: ({ children }: any) => (
      <Paragraph
        className={clsx(
          content_alignment == "Center" && "text-center",
          "text-lg md:text-xl text-black-500 font-semibold mt-8"
        )}
        color={paragraph_color || text_color}
      >
        {children}
      </Paragraph>
    ),
    strong: ({ children }: { children: any }) => (
      <strong style={{ color: strong_color || text_color || "inherit" }}>
        {children}
      </strong>
    ),
  };
};

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */

const Hero = ({
  slice,
  // @ts-ignore
  context: { page_default_text_color },
}: HeroProps): JSX.Element => {
  const components = getComponents({
    text_color: page_default_text_color,
    strong_color: slice.primary.bold_content_text_color,
    paragraph_color: slice.primary.content_text_color,

    content_alignment: slice.primary.content_alignment,
  });
  return (
    <div className="w-full h-full relative">
      {slice.primary.theme_color && (
        <div
          className="w-full h-full -z-50 absolute top-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), ${slice.primary.theme_color} 18%, ${slice.primary.theme_color} 58%, ${slice.primary.theme_color})`,
          }}
        ></div>
      )}
      <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="max-w-2xl mx-auto"
      >
        <div className="max-w-[700px] mt-[80px] md:mt-0 mx-auto animate-fade-in duration-500">
          <PrismicRichText
            field={slice.primary.bond_text}
            components={components}
          />
        </div>
        <div>
          <PrismicRichText
            field={slice.primary.heading_h2}
            components={components}
          />
        </div>
        <div>
          <PrismicRichText
            field={slice.primary.content}
            components={components}
          />
        </div>
        {slice.primary.cta_text?.length && (
          <div
            className="block text-center pt-8 md:pt-12"
            style={{ color: page_default_text_color }}
          >
            <PrismicNextLink
              className="inline-block transition-all duration-75 hover:-translate-y-2 !leading-snug rounded-full border-[1px] border-solid px-[50px] mobile:px-[65px] md:px-[100px] py-[12.5px] mobile:py-[15px] md:py-[25px] text-xl mobile:text-2xl md:text-3xl"
              field={slice.primary.cta_link}
            >
              {slice.primary.cta_text}
            </PrismicNextLink>
            <Reveal
              distance="10"
              delay={slice.primary.after_cta_text_delay || 0}
              width="100%"
            >
              {slice.primary.after_cta_text}
            </Reveal>
          </div>
        )}
      </Bounded>
    </div>
  );
};

export default Hero;
