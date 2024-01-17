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
  context: { orientation, navigation_items_color },
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
              // old="text-xl"
              className="navigation-item text-6xl block"
              style={{
                paddingRight: "50px",
                color: navigation_items_color || "inherit",
              }}
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
              // old="text-2xl"
              className="navigation-item text-5xl block text-center py-8"
              field={link}
              style={{ color: navigation_items_color }}
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
