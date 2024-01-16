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
  context,
}: SmallBackgroundImageProps): JSX.Element => {
  return (
    <PrismicNextImage
      className="absolute bg-img -z-10"
      style={{
        top: slice.primary.top + "px",
        right: slice.primary.right + "px",
        bottom: slice.primary.bottom + "px",
        left: slice.primary.left + "px",
        maxWidth: slice.primary.max_width + "px",
      }}
      field={slice.primary.small_background_image}
    />
  );
};

export default SmallBackgroundImage;
