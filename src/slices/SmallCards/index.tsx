import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

type componentsType = ({}: any) => JSXMapSerializer;

const getComponents: componentsType = ({
  h2_color = "inherit",
  h3_color = "inherit",
  paragraph_color = "inherit",
}: any) => {
  return {
    heading2: ({ children }: any) => {
      return (
        <Heading
          as="h2"
          size="lg"
          className="font-light tracking-tight leading-tight text-xl mobile:text-3xl md:text-5xl 2xl:text-6xl text-center mb-4"
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
          className="font-body text-center mb-4 font-light"
          color={h3_color}
        >
          {children}
        </Heading>
      );
    },
    paragraph: ({ children }: any) => (
      <Paragraph
        className="text-center text-base md:text-lg text-black-500 mb-10 font-extralight"
        color={paragraph_color}
      >
        {children}
      </Paragraph>
    ),
  };
};

/**
 * Props for `SmallCards`.
 */
export type SmallCardsProps = SliceComponentProps<Content.SmallCardsSlice>;

/**
 * Component for "SmallCards" Slices.
 */
const SmallCards = ({
  slice,
  //@ts-ignore
  context: { page_default_text_color },
}: SmallCardsProps): JSX.Element => {
  const { title_color, card_title_color, card_content_color } = slice.primary;
  const components = getComponents({
    h2_color: title_color || page_default_text_color,
    h3_color: card_title_color || page_default_text_color,
    paragraph_color: card_content_color || page_default_text_color,
  });
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mb-16">
        <PrismicRichText field={slice.primary.title} components={components} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-14 gap-y-11">
        {slice.items.map(({ card_icon, card_title, card_content }, index) => (
          <div className="flex flex-col items-center">
            <div className="w-[72px] h-[72px] min-h-[72px] min-w-[72px] border-solid border-1 border-[#432e2e] mb-8 p-[10px] rounded-[4px] flex justify-center items-center">
              <PrismicNextImage field={card_icon} />
            </div>
            <PrismicRichText field={card_title} components={components} />
            <PrismicRichText field={card_content} components={components} />
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default SmallCards;
