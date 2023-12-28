import Bounded from "@/components/Bounded";
import Para from "@/components/Paragraph";
import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

type componentsType = ({}: any) => JSXMapSerializer;

const getComponents: componentsType = ({
  sub_header_color = "inherit",
}: any) => {
  return {
    paragraph: ({ children }: any) => (
      <Para
        className=" font-montserrat text-center font-light text-xl mobile:text-2xl md:text-3xl !leading-relaxed text-black-500 mt-8 mb-10"
        color={sub_header_color}
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
const Paragraph = ({ slice }: ParagraphProps): JSX.Element => {
  const components = getComponents({});
  return (
    <Bounded
      className="max-w-3xl px-10 mx-auto"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.content} components={components} />
    </Bounded>
  );
};

export default Paragraph;
