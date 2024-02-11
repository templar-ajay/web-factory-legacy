import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Reveal } from "@/components/Reveal";
import { Content } from "@prismicio/client";
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
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="px-5 opacity-70 flex flex-wrap gap-x-20 gap-y-10 align-middle justify-center">
        {slice.items.map(({ tech_name }, index) => (
          <div key={index} className="">
            <Reveal>
              <Heading as="h2" size="md" color="#fff" className="ram">
                {tech_name}
              </Heading>
            </Reveal>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default TechList;
