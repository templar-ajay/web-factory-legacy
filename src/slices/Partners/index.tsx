import Bounded from "@/components/Bounded";
import { Reveal } from "@/components/Reveal";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
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
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="px-5 opacity-70 flex flex-wrap gap-x-20 gap-y-10 align-middle justify-center">
        {slice.items.map(({ partner_logo }, index) => (
          <div
            key={index}
            className="h-[28px] w-[100px] mobile:h-[40px] mobile:w-[130px] sm:h-[64px] sm:w-[160px] flex justify-center items-center"
          >
            <Reveal>
              <PrismicNextImage
                className="object-contain"
                field={partner_logo}
              />
            </Reveal>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Partners;
