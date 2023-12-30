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
  context: { orientation },
}: NavigationProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {orientation == "desktop" && (
        <div className="flex">
          {slice.items.map(({ name, link }) => (
            <PrismicNextLink
              className="navigation-item text-xl block"
              style={{ paddingRight: "50px" }}
              field={link}
              key={name}
            >
              {name}
            </PrismicNextLink>
          ))}
        </div>
      )}
      {orientation == "mobile" && (
        <div>
          {slice.items.map(({ name, link }) => (
            <PrismicNextLink
              className="navigation-item text-2xl block text-center py-8"
              field={link}
            >
              {name}
            </PrismicNextLink>
          ))}
        </div>
      )}
    </section>
  );
};

export default Navigation;
