import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Para from "@/components/Paragraph";
import { Reveal } from "@/components/Reveal";
import { Content } from "@prismicio/client";
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
          className="w-full h-full -z-50 absolute top-0"
          style={{
            backgroundImage: `linear-gradient(${slice.primary.theme_color}, ${slice.primary.theme_color} 18%, ${slice.primary.theme_color} 58%, rgba(0, 0, 0, 0))`,
          }}
        ></div>
      )}
      <Bounded
        className="max-w-2xl mx-auto px-5 md:px-10"
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        {slice.primary.title?.length && (
          <Reveal width="100%" delay={0.2}>
            <Heading
              as="h2"
              size="lg"
              className="mx-auto w-fit py-2 mb-4"
              color="#fff"
            >
              {slice.primary.title}
            </Heading>
          </Reveal>
        )}
        <Reveal width="100%" delay={0.5}>
          <PrismicRichText
            field={slice.primary.content}
            components={components}
          />
        </Reveal>
      </Bounded>
    </div>
  );
};

export default Paragraph;
