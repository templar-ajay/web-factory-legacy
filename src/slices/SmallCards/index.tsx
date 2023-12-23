import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SmallCards`.
 */
export type SmallCardsProps = SliceComponentProps<Content.SmallCardsSlice>;

/**
 * Component for "SmallCards" Slices.
 */
const SmallCards = ({ slice }: SmallCardsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for small_cards (variation: {slice.variation})
      Slices
    </section>
  );
};

export default SmallCards;
