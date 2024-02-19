import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Reveal } from "@/components/Reveal";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TechList`.
 */
export type TechListProps = SliceComponentProps<Content.TechListSlice>;

/**
 * Component for "TechList" Slices.
 */
const TechList = ({ slice }: TechListProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.theme_color && (
        <div
          className="w-full h-full -z-50 absolute top-0"
          style={{
            backgroundImage: `linear-gradient(${slice.primary.theme_color}, ${slice.primary.theme_color} 18%, ${slice.primary.theme_color} 58%, rgba(0, 0, 0, 0))`,
          }}
        ></div>
      )}
      <Bounded as="div">
        <div className="px-5 opacity-70 flex flex-wrap gap-x-20 gap-y-10 align-middle justify-center">
          {slice.items.map(({ tech_icon, tech_name }, index) => (
            <div key={index} className="mx-2 mobile:mx-0">
              <Reveal>
                <Heading as="h2" size="md" color="#fff" className="RamRam">
                  <PrismicNextImage
                    field={tech_icon}
                    className="inline-block pb-2 mr-2"
                  />
                  {tech_name}
                </Heading>
              </Reveal>
            </div>
          ))}
        </div>
      </Bounded>
    </section>
  );
};

export default TechList;
