import { hexToRGB } from "@/app/utils";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { Reveal } from "@/components/Reveal";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

type componentsType = ({}: any) => JSXMapSerializer;
type getComponentsProps = {
  paragraph_color: any;
  h2_color: any;
  h3_color: any;
};

const getComponents: componentsType = ({
  paragraph_color = "inherit",
  h2_color = "inherit",
  h3_color = "inherit",
}: getComponentsProps) => {
  return {
    heading2: ({ children }: any) => {
      return (
        <Heading
          as="h2"
          size="lg"
          className="font-medium tracking-normal !leading-snug text-3xl md:text-5xl 2xl:text-6xl text-center mb-4"
          color={h2_color}
        >
          {children}
        </Heading>
      );
    },
    heading3: ({ children }: any) => {
      return (
        <Heading
          as="h3"
          size="xs"
          className="font-body text-center mb-4"
          color={h3_color}
        >
          {children}
        </Heading>
      );
    },
    paragraph: ({ children }: any) => (
      <Paragraph
        className="font-light text-center text-lg md:text-[22px] leading-10 text-black-500 mt-8 mb-10"
        color={paragraph_color}
      >
        {children}
      </Paragraph>
    ),
  };
};

/**
 * Props for `Cards`.
 */
export type CardsProps = SliceComponentProps<Content.CardsSlice>;

/**
 * Component for "Cards" Slices.
 */
const Cards = async ({
  slice,
  //@ts-ignore
  context: { page_default_text_color },
}: CardsProps): Promise<JSX.Element> => {
  const components = getComponents({
    h2_color: slice.primary.title_color || page_default_text_color,
    h3_color: slice.primary.card_title_color || page_default_text_color,
    paragraph_color:
      slice.primary.card_content_color || page_default_text_color,
  });
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Reveal width="!00%" delay={0.1}>
        <div
          className="mx-auto w-fit rounded-full py-2 px-5 text-lg mb-4"
          style={{
            color: slice.primary.title_color || "#a5d18e",
            backgroundColor: slice.primary.title_background_color || "#f0f8ec",
          }}
        >
          {slice.primary.title}
        </div>
      </Reveal>
      <div className="max-w-lg mx-auto mb-16">
        <Reveal delay={0.15}>
          <PrismicRichText
            field={slice.primary.heading}
            components={components}
          />
        </Reveal>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {slice.items.map(({ card_content, card_icon, card_title }, index) => (
          <Reveal>
            <div
              key={index + "_" + card_title}
              className="flex flex-col py-6 px-5 mobile:px-10 rounded-[30px] !transition-shadow duration-300 hover:!shadow-slate-800/40"
              style={{
                background:
                  slice.primary.card_background_color || "transparent",
              }}
            >
              <div className="mx-auto w-fit relative mb-8">
                <div
                  className="translate-x-4 translate-y-4 w-6 h-6 absolute"
                  style={{ boxShadow: `-1px 14px 40px ${false || "#ffbe32"}` }}
                ></div>
                <PrismicNextImage field={card_icon} />
              </div>
              <PrismicRichText field={card_title} components={components} />
              <PrismicRichText field={card_content} components={components} />
            </div>
          </Reveal>
        ))}
      </div>
    </Bounded>
  );
};

export default Cards;
