import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Navigation`.
 */
export type NavigationProps = SliceComponentProps<Content.NavigationSlice>;

/**
 * Component for "Navigation" Slices.
 */
const Navigation = ({
  slice,
  //@ts-ignore
  context: { spacing },
}: NavigationProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.items.map(({ name, link }) => (
        <PrismicNextLink
          className="navigation-item text-xl"
          style={{ paddingRight: spacing || "" }}
          field={link}
        >
          {name}
        </PrismicNextLink>
      ))}
    </section>
  );
};

export default Navigation;
