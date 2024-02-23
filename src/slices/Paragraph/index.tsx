import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Para from "@/components/Paragraph";
import { Reveal } from "@/components/Reveal";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

type componentsType = ({}: any) => JSXMapSerializer;

const getComponents: componentsType = ({
  paragraph_color = "inherit",
}: any) => {
  return {
    heading2: ({ children }: any) => (
      <Heading
        as="h2"
        size="lg"
        className="mx-auto w-fit py-2 mb-4"
        color="#fff"
      >
        {children}
      </Heading>
    ),
    paragraph: ({ children }: any) => (
      <Para
        className="font-montserrat font-light text-lg mobile:text-xl md:text-2xl !leading-relaxed text-black-500 mt-8 mb-10"
        color={paragraph_color}
      >
        {children}
      </Para>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    listItem: ({ children }) => (
      <li
        style={{ color: paragraph_color }}
        className="font-montserrat font-light text-lg mobile:text-xl md:text-2xl !leading-relaxed text-black-500 my-8"
      >
        {children}
      </li>
    ),
  };
};

/**
 * Props for `Paragraph`.
 */
export type ParagraphProps = SliceComponentProps<Content.ParagraphSlice>;

/**
 * Component for "Paragraph" Slices.
 */
const Paragraph = ({
  slice,
  //@ts-ignore
  context: { page_default_text_color },
}: ParagraphProps): JSX.Element => {
  const components = getComponents({
    paragraph_color: page_default_text_color,
  });

  return (
    <div className="relative">
      {slice.primary.theme_color && (
        <div
          className="w-full h-[90%] -z-50 absolute top-[10%]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0), ${
              slice.primary.theme_color + "99"
            } 25%,  ${slice.primary.theme_color + "D9"} 50%, ${
              slice.primary.theme_color + "99"
            } 70%, rgba(0, 0, 0, 0))`,
          }}
        ></div>
      )}
      <Bounded
        className=" max-w-2xl mx-auto px-5 md:px-10"
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        {slice.primary.title?.length && (
          <Reveal width="100%" delay={0.2}>
            <PrismicRichText
              field={slice.primary.title}
              components={components}
            />
          </Reveal>
        )}
        <Reveal width="100%" className="link_underline" delay={0.5}>
          <PrismicRichText
            field={slice.primary.content}
            components={components}
          />
        </Reveal>
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
              className="text-white"
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

export default Paragraph;
