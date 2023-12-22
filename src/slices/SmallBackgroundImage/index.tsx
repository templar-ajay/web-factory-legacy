import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SmallBackgroundImage`.
 */
export type SmallBackgroundImageProps =
  SliceComponentProps<Content.SmallBackgroundImageSlice>;

/**
 * Component for "SmallBackgroundImage" Slices.
 */
const SmallBackgroundImage = ({
  slice,
  slices,
}: SmallBackgroundImageProps): JSX.Element => {
  return (
    // <section
    //   data-slice-type={slice.slice_type}
    //   data-slice-variation={slice.variation}
    // >
    //   Placeholder component for small_background_image (variation:{" "}
    //   {slice.variation}) Slices
    // </section>
    <div
      className="max-w-[100px] absolute -z-10"
      style={{
        top: slice.primary.top + "px",
        right: slice.primary.right + "px",
        bottom: slice.primary.bottom + "px",
        left: slice.primary.left + "px",
      }}
    >
      <PrismicNextImage
        loading="eager"
        field={slice.primary.small_background_image}
      />
    </div>
  );
};

export default SmallBackgroundImage;
