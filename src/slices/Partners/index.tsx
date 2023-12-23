import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Partners`.
 */
export type PartnersProps = SliceComponentProps<Content.PartnersSlice>;

/**
 * Component for "Partners" Slices.
 */
const Partners = ({ slice }: PartnersProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for partners (variation: {slice.variation}) Slices
    </section>
  );
};

export default Partners;
