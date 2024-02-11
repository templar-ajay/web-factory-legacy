import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `IFrame`.
 */
export type IFrameProps = SliceComponentProps<Content.IFrameSlice>;

/**
 * Component for "IFrame" Slices.
 */
const IFrame = ({ slice }: IFrameProps): JSX.Element => {
  return (
    <Bounded
      className="!px-0 md:px-6 mx-auto"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className="h-full w-full mx-auto"
        style={{
          maxWidth: slice.primary.max_width || "",
          height: slice.primary.height || "",
        }}
        dangerouslySetInnerHTML={{ __html: slice.primary.iframe || "" }}
      ></div>
    </Bounded>
  );
};

export default IFrame;
